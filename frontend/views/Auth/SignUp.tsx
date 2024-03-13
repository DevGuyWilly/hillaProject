import {Button, Container} from "@mui/material";
import React, {FormEvent, useState} from "react";
import {TextField} from "@hilla/react-components/TextField";
import {PasswordField} from "@hilla/react-components/PasswordField";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {Link, useNavigate} from "react-router-dom";
import {UserEndPoint} from "Frontend/generated/endpoints";
import User from "Frontend/generated/com/example/application/models/User";
import {useForm} from "@hilla/react-form";
import UserModel from "Frontend/generated/com/example/application/models/UserModel";
export const SignUp: React.FC = () => {
    const [emailUniqueErr, setEmailUniqueErr] = useState('')

    const navigate = useNavigate();
    const {model, field, submit, addValidator, invalid, read} = useForm(UserModel, {
        onSubmit: async (user) => {
            await UserEndPoint.register(user).then(() => navigate("/login")).catch(e => setEmailUniqueErr(e.message))
        }
    });

    return (
        <Container maxWidth={"sm"}>
        <form noValidate autoComplete="off">
            <VerticalLayout>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    {...field(model.email)}
                    errorMessage={emailUniqueErr || "Enter a valid email address"}
                    style={{
                        width: "100%"
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Full Name"
                    {...field(model.fullName)}
                    style={{
                        width: "100%"
                    }}
                />
                <PasswordField
                    required
                    id="outlined-password-input"
                    label="Password"
                    {...field(model.password)}
                    style={{
                        width: "100%"
                    }}
                />
                <Button variant="contained" color="primary"
                        onClick={submit}
                        disabled={invalid}
                        style={{
                            width: "100%"
                        }}>
                    Sign Up
                </Button>
                <Link to="/login" style={{
                    alignSelf: "center"
                }}>
                    Have an account??
                </Link>
            </VerticalLayout>
        </form>
        </Container>
    );
};