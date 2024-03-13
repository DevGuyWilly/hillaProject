import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {MessageToolbar} from "Frontend/components/MessageList/MessageToolbar";
import {MessageItem} from "Frontend/components/MessageList/MessageItem";
import {useSelector} from "react-redux";
import {AuthSelectors} from "Frontend/redux/feat/auth/authSelectors";
import {useEffect, useRef, useState} from "react";
import {ChatEndPoint, ChatEndPoint1} from "Frontend/generated/endpoints";
import {useAppDispatch} from "Frontend/redux/hooks";
import Message from "Frontend/generated/com/example/application/models/Message";
import User from "Frontend/generated/com/example/application/models/User";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {Icon} from "@hilla/react-components/Icon";
import "./MessageBox.css"
import {Subscription} from "@hilla/frontend";

const msgStyle = (sender: User, me: User) => ({
    maxWidth: "53%",
    borderRadius: "10px",
    backgroundColor: sender.id === me.id ? "#5BC4FF" : "#5BC4FF2E",
    padding: "14px 34px 9px 25px",
    color: sender.id  === me.id ? "#FFF" : "#373737",
    marginBottom: "23px",
    alignSelf: sender.id  === me.id ? "end" : "start"
});

export const MessageList : React.FC = () => {
    const dispatch = useAppDispatch();
    const me = useSelector(AuthSelectors.getCurrentUser());
    const chattingUser = useSelector(AuthSelectors.getChattingUser());
    const [messages, setMessages] = useState<Message[]>([]);

    const [message, setMessage] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if(me && chattingUser) {
            const msg: Message = {
                message: message,
                sender: me,
                receiver: chattingUser,
                viewed: true
            };
            ChatEndPoint1.sendMessage(msg).then((msg) => {
                setMessage("");
            });
        }
    }
    const selectFile = () => {

    }

    useEffect(() => {
        setMessages([]);
        let flux: any = null;
        if(chattingUser && chattingUser?.id) {
            flux = ChatEndPoint1.getMessages(me, chattingUser);
            flux.onNext((msg: any) => {
                msg && setMessages(prevState => [...prevState, msg]);
            });

        }
        return () => {
            flux && flux.cancel();
        }
    }, [chattingUser, chattingUser?.id]);



    return (
        <VerticalLayout style={{
            marginLeft: "40px",
            width: "100%",
            height: "100%"
        }}>
            <MessageToolbar/>
            <div
                ref={scrollRef}
                style={{
                    display: "flex",
                    flexDirection: "column",
                width: "100%",
                height: "calc(100% - 160px)",
                overflowY: 'auto',
                margin: "10px 0"
            }}>
                {
                    messages && messages.map(message =>
                        message?.sender && me && <MessageItem
                            key={message.id}
                            message={message}
                            style={msgStyle(message.sender, me)}
                        />)
                }
            </div>
                <TextField placeholder={"Your message"}
                           value={message}
                           onChange={e => setMessage(e.target.value)}
                           clearButtonVisible className={"message-box"}
                           style={{
                               width: "100%",
                           }}>
                    <Button slot="prefix" theme="icon"
                            onClick={selectFile}
                            style={{
                                backgroundColor: 'transparent',
                                marginInline: "10px"
                            }}>
                        <Icon slot="prefix" icon="vaadin:paperclip" style={{
                            color: "#000",
                        }}/>
                    </Button>
                    <Button slot="suffix" theme="icon"
                            onClick={sendMessage}
                            style={{
                                backgroundColor: 'transparent',
                                marginRight: "15px"
                            }}>
                        <Icon slot="prefix" icon="vaadin:paperplane-o" style={{
                            color: "#000",
                        }}/>
                    </Button>
                </TextField>
        </VerticalLayout>
    )
}