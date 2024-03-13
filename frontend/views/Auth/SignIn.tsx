import React, {FormEvent, useState} from 'react';
import {Button, Container} from "@mui/material";
import {TextField} from "@hilla/react-components/TextField";
import {PasswordField} from "@hilla/react-components/PasswordField";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {Link, useNavigate} from "react-router-dom";
import {UserEndPoint} from "Frontend/generated/endpoints";
import {useAppDispatch} from "Frontend/redux/hooks";
import {AuthActions} from "Frontend/redux/feat/auth/authSlice";
import UserStatus from "Frontend/generated/com/example/application/dto/UserStatus";

export const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleSignIn = async (e:FormEvent) => {
        // Add your authentication logic here
        e.preventDefault();
        const user = await UserEndPoint.login(email, password);
        if(user) {
            navigate("/");
            sessionStorage.setItem("user", JSON.stringify(user));
            dispatch(AuthActions.setCurrentUser(user));
            UserEndPoint.send({userId: user.id || 0, status: UserStatus.ONLINE})
        } else {
            navigate("/login");
        }
    };

    return (
        <Container maxWidth={"sm"}>
            <form noValidate autoComplete="off">
                <VerticalLayout>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{
                            width: "100%"
                        }}
                    />
                    <PasswordField
                        required
                        id="outlined-password-input"
                        label="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{
                            width: "100%"
                        }}
                    />
                    <Button variant="contained" color="primary" onClick={e => handleSignIn(e)}
                            style={{
                        width: "100%"
                    }}>
                        Sign In
                    </Button>
                    <Link to="/signup" style={{
                        alignSelf: "center"
                    }}>
                        Not have account yet?
                    </Link>
                </VerticalLayout>
            </form>
        </Container>
    );
};