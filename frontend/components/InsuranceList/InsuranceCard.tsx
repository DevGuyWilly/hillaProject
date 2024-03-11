import {Button, Typography} from "@mui/material";
import React from "react";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import Paper from "@mui/material/Paper";

export interface InsuranceCardProps {
    iconColor: string;
    backColor: string;
    icon: string;
    cash: string;
    title: string;
}
export const InsuranceCard : React.FC<InsuranceCardProps> = (props) => {
    return (
        <Button variant={"outlined"} style={{
            minWidth: "290px",
            minHeight: "200px",
            maxWidth: "290px",
            maxHeight: "200px",
            border: "4px solid #000",
            borderRadius: "20px",
            backgroundColor: props.backColor,
            paddingTop: "40px",
            paddingBottom: "32px",
            paddingInline: "28px",
            marginRight: "20px"
        }}>
            <VerticalLayout style={{
                height: "100%",
                alignItems: 'start',
                justifyContent: 'space-between'
            }}>
                <HorizontalLayout style={{
                    alignSelf: 'start'
                }}>
                    <Paper color={props.iconColor}
                          style={{
                              minWidth: "51px",
                              minHeight: "51px",
                              maxWidth: "51px",
                              maxHeight: "51px",
                              backgroundColor: props.iconColor,
                              borderRadius: "50%",
                          }}>

                    </Paper>
                    <Typography color="textPrimary"  style={{
                        marginLeft: "25px",
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "24.4px",
                        textAlign: "start",
                        wordWrap: "break-word"
                    }}>
                        {props.title}
                    </Typography>
                </HorizontalLayout>
                <Typography variant="h4" color="textPrimary" style={{
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "36.6px",
                    textAlign: "start",
                    paddingLeft: "10px"
                }}>
                    $ {props.cash}
                </Typography>
            </VerticalLayout>
        </Button>

    )
}