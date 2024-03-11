import {InsuranceCard} from "Frontend/components";
import {Button} from "@mui/material";
import React from "react";
import {Add} from "@mui/icons-material";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";

const cardsData = [
    {id: 0, title: 'Health Insurance', amount: '$3,650.80', iconColor: "#CFA9FF", backColor: "#E5D0FF", icon: "" },
    {id: 1, title: 'Wealth Insurance', amount: '$43,600.00', iconColor: "#FFC177", backColor: "#FFDCB2", icon: "" },
    {id: 2,  title: 'Vehicle Insurance', amount: '$23,762.00', iconColor: "#73DFB2", backColor: "#B7FFE1", icon: "" },
];
export const InsuranceList : React.FC = () => {
    return (
        <HorizontalLayout style={{
            alignItems: "center",
            width: "100%",
            marginTop: "40px"
        }}>
            <HorizontalLayout style={{
                width: "100%",
                overflowX: "auto",
            }}>
                {cardsData.map(card => (
                    <InsuranceCard
                        key={card.id}
                        title={card.title}
                        cash={card.amount}
                        icon={""}
                        backColor={card.backColor}
                        iconColor={card.iconColor}
                    />
                ))}
            </HorizontalLayout>
            <Button style={{
                backgroundColor: "#F5F5F5",
                borderRadius: "20px",
                width: "75px",
                height: "204px",
                marginLeft: "20px"
            }}>
                <Add fontSize={"large"} style={{color: "#000"}}/>
            </Button>
        </HorizontalLayout>
    )
}