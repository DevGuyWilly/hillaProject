import React from "react";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import {Icon} from "@hilla/react-components/Icon";
import {Button} from "@hilla/react-components/Button";
import {useSelector} from "react-redux";
import {AuthSelectors} from "Frontend/redux/feat/auth/authSelectors";

interface MessageToolbarProps {
}
export const MessageToolbar: React.FC = () => {
    const chattingUser = useSelector(AuthSelectors.getChattingUser());
    return (
        <HorizontalLayout style={{
            height: "80px",
            width: "100%",
            backgroundColor: "#B2B5FF54",
            borderRadius: "10px",
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingInline: '20px'
        }}>
            <VerticalLayout>
                <Typography style={{
                    fontWeight: "Bold",
                    fontSize: "30px",
                    color: "#000"
                }}>{chattingUser?.fullName}</Typography>
                <Typography style={{
                    fontWeight: "Medium",
                    fontSize: "16px",
                    color: "#373737"
                }}>Wealth Insurance agent</Typography>
            </VerticalLayout>
            <HorizontalLayout>
                <Button theme="icon" style={{
                    backgroundColor: "transparent",
                }}>
                    <Icon icon="vaadin:search" slot="prefix" />
                </Button>
                <Button theme="icon" style={{
                    backgroundColor: "transparent",
                }}>
                    <Icon icon="vaadin:phone" slot="prefix" />
                </Button>
                <Button theme="icon" style={{
                    backgroundColor: "transparent",
                }}>
                    <Icon icon="vaadin:ellipsis-dots-v" slot="prefix" />
                </Button>
            </HorizontalLayout>
        </HorizontalLayout>
    )
}