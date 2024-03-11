
import React from "react";
import Paper from "@mui/material/Paper";
import CardBack from "../../assets/card.png";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import {Image} from "@mui/icons-material";

export interface PaymentCardProps {
    id?: string | number;
    owner: string;
    number: string;
    amount: string;
    active: boolean;
}
export const PaymentCard : React.FC<PaymentCardProps> = (props) => {
    return (
        <Paper sx={{
            backgroundImage: `url(${CardBack})`,
            backgroundColor: "#000",
            color: "#FFF",
            borderRadius: "20px",
            flex: "0 0 auto",
            minWidth: "290px",
            minHeight: "190px",
            maxWidth: "290px",
            maxHeight: "190px",
            scrollSnapAlign: "start",
            marginRight: "10px",
            paddingLeft: "25px"
        }}>
            <VerticalLayout>
                <Typography style={{
                    marginTop: "70px",
                    fontWeight: "regular",
                    fontSize: "20px"
                }}>{props.number}</Typography>
                <Typography style={{
                    marginTop: "5px",
                    fontWeight: "SemiBold",
                    fontSize: "14px"
                }}>{props.owner}</Typography>
                <Typography style={{
                    marginTop: "30px",
                    fontWeight: "SemiBold",
                    fontSize: "18px"
                }}>$ {props.amount}</Typography>
            </VerticalLayout>
        </Paper>
    )
}