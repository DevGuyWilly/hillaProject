import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {Avatar} from "@hilla/react-components/Avatar";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import {Badge, Button} from "@mui/material";
import React from "react";

export interface ContactItemProps {
    unviewedMsgs: number;
    isChatting: boolean;
    firstName: string;
    lastName: string;
    message: string;
}
export const ContactItem :React.FC<ContactItemProps> = (props) => {
    return (
        <Button style={{
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
                        fontWeight: "SemiBold",
                        color: "#000",
                        textTransform: "none"
                    }}>{props.firstName} {props.lastName}</Typography>
                    <HorizontalLayout style={{
                        width: "100%",
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography style={{
                            fontSize: "16px",
                            fontWeight: "Medium",
                            color: props.unviewedMsgs === 0 ? "#9F9F9F" : "#1B84BF",
                            textTransform: "none"
                        }}>{
                            props.message.length > 25 + (!props.unviewedMsgs? 5 : 0) ?
                                `${props.message.substring(0, 25 + (!props.unviewedMsgs? 5 : 0))}...` : props.message}
                        </Typography>
                        {props.unviewedMsgs !== 0 && <Badge
                            badgeContent={props.unviewedMsgs}
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