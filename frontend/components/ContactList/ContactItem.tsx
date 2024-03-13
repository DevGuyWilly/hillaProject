import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {Avatar} from "@hilla/react-components/Avatar";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import {Badge, Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import User from "Frontend/generated/com/example/application/models/User";
import {ChatEndPoint, UserEndPoint} from "Frontend/generated/endpoints";
import {useSelector} from "react-redux";
import {AuthSelectors} from "Frontend/redux/feat/auth/authSelectors";
import Message from "Frontend/generated/com/example/application/models/Message";
import {useAppDispatch} from "Frontend/redux/hooks";
import {AuthActions} from "Frontend/redux/feat/auth/authSlice";

export interface ContactItemProps {
    user: User,
    isChatting: boolean,
    online: boolean
}
export const ContactItem :React.FC<ContactItemProps> = (props) => {
    const dispatch = useAppDispatch();
    const me = useSelector(AuthSelectors.getCurrentUser());
    const [unviewedMsgs, setUnviewed] = useState(0);
    const [lastMsg, setLastMsg] = useState<Message>();

    useEffect(() => {
        if(me) {
            ChatEndPoint.CountByContact(me, props.user).then(count => {
                setUnviewed(count);
            })
            ChatEndPoint.getLastMessageByContact(me, props.user).then(msg => {
                setLastMsg(msg);
            })
        }
    }, [me]);

    return (
        <Button
            onClick={() => {
                dispatch(AuthActions.setChattingUser(props.user));
            }}
            style={{
            width: "100%",
            height: "100px",
            border: props.isChatting ? "2px solid #000" : "none",
            borderRadius: "10px",
            paddingInline: "18px",
            justifyContent: "flex-start"
        }}>
            <HorizontalLayout style={{
                alignItems: 'center',
                width: "100%"
            }}>
                <Avatar style={{
                    width: "60px",
                    height: "60px"
                }}/>
                <VerticalLayout style={{
                    alignItems: 'start',
                    paddingInline: "20px",
                    width: "100%"
                }}>
                    <Typography style={{
                        fontSize: "20px",
                        fontWeight: props.online? "Bold" : "SemiBold",
                        color: props.online? "#0A8" : "#000",
                        textTransform: "none"
                    }}>{props.user.fullName}</Typography>
                    <HorizontalLayout style={{
                        width: "100%",
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography style={{
                            fontSize: "16px",
                            fontWeight: "Medium",
                            color: unviewedMsgs === 0 ? "#9F9F9F" : "#1B84BF",
                            textTransform: "none"
                        }}>{ lastMsg?.message && lastMsg.sender?.id === me?.id ? "You : " : ""}
                            { lastMsg?.message && (
                            lastMsg.message.length > 25 + (!unviewedMsgs? 5 : 0) ?
                                `${lastMsg.message.substring(0, 25 + (!unviewedMsgs? 5 : 0))}...` : lastMsg.message)
                        }
                        </Typography>
                        {unviewedMsgs !== 0 && <Badge
                            badgeContent={unviewedMsgs}
                            color="error"
                            sx={{
                                [`& .MuiBadge-colorError`]: {
                                    backgroundColor: "#FF7070",
                                    width: "25px",
                                    height: "25px",
                                    borderRadius: "50%",
                                    fontWeight: "SemiBold",
                                    fontSize: "16px"
                                },
                            }}
                        />}
                    </HorizontalLayout>
                </VerticalLayout>
            </HorizontalLayout>
        </Button>
    )
}