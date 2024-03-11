import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import Message from "Frontend/generated/com/example/application/models/Message";
import message from "Frontend/generated/com/example/application/models/Message";

interface MessageItemProps {
    message: Message;
}

const myId = "1";
export const MessageItem : React.FC<MessageItemProps> = (props) => {
    return (
        <VerticalLayout style={{
            maxWidth: "53%",
            borderRadius: "10px",
            backgroundColor: props.message.fromUser === myId ? "#5BC4FF" : "#5BC4FF2E",
            padding: "14px 34px 9px 25px",
            color: props.message.fromUser === myId ? "#FFF" : "#373737",
            marginBottom: "23px",
            alignSelf: props.message.fromUser === myId ? "end" : "start"
        }}>
            <Typography style={{
                fontSize: "16px",
                fontWeight: "SemiBold",
            }}>{props.message.message}</Typography>
            <Typography style={{
                fontSize: "14px",
                fontWeight: "Medium",
                alignSelf: "end"
            }}>{props.message.time}</Typography>
        </VerticalLayout>
    )
}