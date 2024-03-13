import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {TextField} from "@hilla/react-components/TextField";
import {Icon} from "@hilla/react-components/Icon";
import {ContactItem} from "Frontend/components/ContactList/ContactItem";
import "./ContactList.css";
import {useSelector} from "react-redux";
import {AuthSelectors} from "Frontend/redux/feat/auth/authSelectors";
import {UserEndPoint} from "Frontend/generated/endpoints";
import {useAppDispatch} from "Frontend/redux/hooks";
import {AuthActions} from "Frontend/redux/feat/auth/authSlice";
import {useCallback, useEffect, useState} from "react";
import OnlineEvent from "Frontend/generated/com/example/application/dto/OnlineEvent";
import UserStatus from "Frontend/generated/com/example/application/dto/UserStatus";

export const ContactList : React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(AuthSelectors.getAllUsers());
    const [usersOnline, setUsersOnline] = useState<number[]>([]);
    const chattingUser = useSelector(AuthSelectors.getChattingUser());

    const searchUsers = (key: string) => {
        UserEndPoint.searchUser(key).then(userlist => {
            userlist && dispatch(AuthActions.setUsers(userlist));
        })
    }

    const handleUserOnline = (event: OnlineEvent) => {
        if(event.status === UserStatus.ONLINE) setUsersOnline(prev => [...prev, event.userId]);
        if(event.status === UserStatus.OFFLINE) setUsersOnline(prev => prev.filter(id => id !== event.userId))
    }

    useEffect(() => {
        UserEndPoint.findUsersOnline().then(users => {
            setUsersOnline(users || []);
        });
        const onlineFlux = UserEndPoint.join()
            .onNext(event => handleUserOnline(event));
        return () => onlineFlux.cancel();
    }, []);

    const checkUserIsOnline = useCallback((userId: number) => {
        return usersOnline.includes(userId);
    }, [usersOnline])

    return(
        <VerticalLayout style={{
            minWidth: "429px",
            maxWidth: "429px",
            padding: "24px 22px",
            backgroundColor: "#F5F5F5",
            borderRadius: "20px",
            height: "100%"
        }}>
            <TextField
                placeholder={"Search"}
                value=""
                onChange={e => searchUsers(e.target.value)}
                clearButtonVisible className="contact-search" style={{
                width: "100%",
                marginBottom: "20px"
            }}>
                <Icon slot="prefix" icon="vaadin:search" style={{
                    marginLeft: "10px"
                }}/>
            </TextField>
            <VerticalLayout style={{
                width: "100%"
            }}>
                {users.map(user =>
                    <ContactItem
                        key={user.id}
                        user={user}
                        isChatting={user.id === chattingUser?.id}
                        online={checkUserIsOnline(user.id || 0)}
                    />)}
            </VerticalLayout>
        </VerticalLayout>
    )
}