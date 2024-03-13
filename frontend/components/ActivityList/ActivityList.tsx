import React from "react";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import Typography from "@mui/material/Typography";
import {IconButton} from "@mui/material";
import {Icon} from "@hilla/react-components/Icon";

const Activities = [
    {id: 0, title : "Medical Bill", amount: 130, date: new Date(2023, 6, 12), active: true},
    {id: 1, title : "Medical Bill", amount: 130, date: new Date(2023, 6, 12), active: true},
    {id: 2, title : "Tuition Fees", amount: 11000, date: new Date(2023, 6, 12), active: false},
    {id: 3, title : "Medical Bill", amount: 130, date: new Date(2023, 6, 12), active: true}
]
export const ActivityList : React.FC = () => {
    return (
    <>
        <HorizontalLayout style={{
            width: "100%",
            justifyContent: 'space-between'
        }}>
            <Typography style={{
                fontSize: '24px',
                fontWeight: 'bold'
            }}>
                Latest Activity
            </Typography>
            <IconButton size={"small"}>
                <Icon icon="vaadin:chevron-circle-right-o"/>
            </IconButton>
        </HorizontalLayout>
        <VerticalLayout style={{
            width: "100%",
            maxHeight: "300px",
            minHeight: "300px",
            overflowY: "auto",
            marginBottom: "80px"
        }}>
            {Activities.map(item =>
                <HorizontalLayout
                    key={item.id}
                    style={{
                    alignItems: 'center',
                    width: "100%",
                    justifyContent: 'space-between',
                    marginTop: "15px",
                    marginBottom: "15px",
                }}>
                    <Icon icon="vaadin:circle" size={30} style={{color : item.active? "#CFA9FF": "#B7B7B7"}}/>
                    <VerticalLayout style={{
                        width: "100%",
                    }}>
                        <HorizontalLayout style={{
                            alignItems: 'center',
                            width: "100%",
                            justifyContent: 'space-between'
                        }}>
                            <Typography style={{
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: "SemiBold"
                            }}>{item.title}</Typography>
                            <Typography style={{
                                fontSize: 18,
                                fontWeight: "Bold",
                                color: "#000"
                            }}>$ {item.amount}</Typography>
                        </HorizontalLayout>
                        <Typography style={{
                            color: "#A5A5A5",
                            fontSize: "13",
                            fontWeight: "SemiBold"
                        }}>{item.date.toDateString()}</Typography>
                    </VerticalLayout>
                </HorizontalLayout>)}
        </VerticalLayout>
    </>
    )
}