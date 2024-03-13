import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import Message from "Frontend/generated/com/example/application/models/Message";
import message from "Frontend/generated/com/example/application/models/Message";

interface MessageItemProps {
    message: Message;
    style: Object;
}
const formatTime= (date: string) => {
    const temp: Date = new Date(date);
    return `${temp.getHours()
        .toString()
        .padStart(2, '0')}:${temp.getMinutes().toString().padStart(2, '0')}`;
}
export const MessageItem : React.FC<MessageItemProps> = (props) => {
    return (
        <VerticalLayout style={props.style}>
            <Typography style={{
                fontSize: "16px",
                fontWeight: "SemiBold",
            }}>{props.message.message}</Typography>
            <Typography style={{
                fontSize: "14px",
                fontWeight: "Medium",
                alignSelf: "end"
            }}>{props.message.time && formatTime(props.message.time)}</Typography>
        </VerticalLayout>
    )
}