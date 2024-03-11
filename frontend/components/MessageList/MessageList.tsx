import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {MessageToolbar} from "Frontend/components/MessageList/MessageToolbar";
import {MessageBox} from "Frontend/components/MessageList/MessageBox";
import {MessageItem} from "Frontend/components/MessageList/MessageItem";

const styles = {
    chatContainer: {
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        color: "#333",
        backgroundColor: "#F5F5F5",
        padding: '20px',
        borderRadius: '8px',
        width: '400px', // Assuming a fixed width for the chat container
    },
    header: {
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    messagesContainer: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
    },
    agentMessage: {
        textAlign: 'left',
        marginBottom: '10px',
    },
    clientMessage: {
        textAlign: 'right',
        marginBottom: '10px',
    },
    attachment: {
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
    },
    micIcon: {
        marginRight: '10px',
    },
    timestamp: {
        fontSize: '12px',
        color: '#999',
    },
}
const messages = [
    {
        id: "0",
        message: "Hello James, I got an email informing me that the terms and conditions for wealth insurance has been updated, can i get more clarification on this",
        time: "08:23",
        fromUser: "1",
        toUser: "2",
        fileId: undefined
    },
    {
        id: "1",
        message: "Hello James, I got an email informing",
        time: "08:24",
        fromUser: "1",
        toUser: "2",
        fileId: undefined
    },
    {
        id: "2",
        message: "Hello James, I got an email informing me that the terms and conditions for wealth insurance has been updated, can i get more clarification on this",
        time: "08:25",
        fromUser: "2",
        toUser: "1",
        fileId: undefined
    },
    {
        id: "4",
        message: "Hello James, I got an email informing me that the terms and conditions for wealth insurance has been updated, can i get more clarification on this",
        time: "08:26",
        fromUser: "2",
        toUser: "1",
        fileId: undefined
    },
    {
        id: "3",
        message: "Hello James, I got an email informing me that the terms and conditions for wealth insurance has been updated, can i get more clarification on this",
        time: "08:30",
        fromUser: "1",
        toUser: "2",
        fileId: undefined
    }
];
export const MessageList : React.FC = () => {
    return (
        <VerticalLayout style={{
            marginLeft: "40px",
            width: "100%",
            height: "100%"
        }}>
            <MessageToolbar/>
            <VerticalLayout style={{
                height: "calc(100% - 280px)",
                overflowY: 'auto',
                margin: "10px 0"
            }}>
                {
                    messages.map(message =>
                        <MessageItem key={message.id} message={message}/>)
                }
            </VerticalLayout>
            <MessageBox/>
        </VerticalLayout>
    )
}