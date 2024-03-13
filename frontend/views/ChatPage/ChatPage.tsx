import React, {useEffect} from "react";

import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import {ContactList, MessageList} from "Frontend/components"
import {useAppDispatch} from "Frontend/redux/hooks";
import {AuthThunks} from "Frontend/redux/feat/auth/authThunks";
export const ChatPage : React.FC = () => {
    const dispatch  = useAppDispatch();

    useEffect(() => {
        dispatch(AuthThunks.getAllUsers())
    }, [])
    return (
        <HorizontalLayout style={{
            width: "100%",
            marginBottom: "20px",
        }}>
            <VerticalLayout style={{
                width: "100%",
                height: "100%",
                backgroundColor: 'background.default',
                paddingTop: '32px',
                paddingInline: '40px'
            }}>
                <Typography style={{
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "39px",
                }}>Messages</Typography>
                <HorizontalLayout style={{
                    width: "100%",
                    height: "calc(100% - 40px)",
                    paddingTop: "45px"
                }}>
                    <ContactList />
                    <MessageList />
                </HorizontalLayout>
            </VerticalLayout>
        </HorizontalLayout>
    )
}