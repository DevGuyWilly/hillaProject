import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {MessageToolbar} from "Frontend/components/MessageList/MessageToolbar";
import {MessageItem} from "Frontend/components/MessageList/MessageItem";
import {useSelector} from "react-redux";
import {AuthSelectors} from "Frontend/redux/feat/auth/authSelectors";
import {useEffect, useState} from "react";
import {ChatEndPoint} from "Frontend/generated/endpoints";
import {useAppDispatch} from "Frontend/redux/hooks";
import Message from "Frontend/generated/com/example/application/models/Message";
import User from "Frontend/generated/com/example/application/models/User";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {Icon} from "@hilla/react-components/Icon";
import "./MessageBox.css"

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
    const sendMessage = () => {
        if(me && chattingUser) {
            const msg: Message = {
                message: message,
                sender: me,
                receiver: chattingUser,
                viewed: false
            };
            ChatEndPoint.send(msg).then((msg) => {
                msg && setMessages(prevState => [...prevState, msg]);
                setMessage("");
            });
        }
    }
    const selectFile = () => {

    }

    useEffect(() => {
        if(chattingUser && chattingUser?.id) {
            const flux = ChatEndPoint.contact(chattingUser);
            flux.onNext((message) => {
                message && setMessages(prevState => [...prevState, message]);
                return () => {
                    flux.cancel();
                    setMessages([]);
                }
            })
        }
    }, [chattingUser, chattingUser?.id]);

    return (
        <VerticalLayout style={{
            marginLeft: "40px",
            width: "100%",
            height: "100%"
        }}>
            <MessageToolbar/>
            <VerticalLayout style={{
                width: "100%",
                height: "calc(100% - 280px)",
                overflowY: 'auto',
                margin: "10px 0"
            }}>
                {
                    messages && messages.map(message =>
                        message && chattingUser && me && <MessageItem
                            key={message.id}
                            message={message}
                            style={msgStyle(chattingUser, me)}
                        />)
                }
            </VerticalLayout>
            <VerticalLayout style={{
                width: "100%",
                height: "min-content",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
            }}>
                <HorizontalLayout style={{
                    width: "100%",
                    height: "80px"
                }}>
                    <TextField placeholder={"Your message"}
                               value={message}
                               onChange={e => setMessage(e.target.value)}
                               onKeyDown={e => {
                                    if(e.keyCode === 13) {
                                        sendMessage()
                                    }
                               }}
                               clearButtonVisible className={"message-box"}
                               style={{
                                   width: "100%",
                                   marginBottom: "20px",
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
                </HorizontalLayout>
                <HorizontalLayout style={{
                    height: '100px'
                }}>

                </HorizontalLayout>
            </VerticalLayout>
        </VerticalLayout>
    )
}