import * as React from "react";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import Typography from "@mui/material/Typography";
import {Icon} from "@hilla/react-components/Icon";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import Paper from "@mui/material/Paper";
const options = {
    chart: {
        type: 'column',
        backgroundColor: "#373737",
    },

    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
            description: 'Countries',
        },
        labels: {
            style: {
                color: "#FFF"
            }
        },
    },
    title: "",
    yAxis: {
        min: 0,
        title: "",
        gridLineColor: "#FFF",
        gridLineDashStyle: 'Dash',
        gridLineWidth: 2,
        lineColor: "#FFF",
        labels: {
            style: {
                color: "#FFF"
            }
        },
    },
    tooltip: {
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [
        {
            name: 'Corn',
            data: [406292, 260000, 107000, 68300, 27500, 14500],
            color: "#FF9284"
        },
        {
            name: 'Wheat',
            data: [51086, 136000, 5500, 141000, 107180, 77000],
            color: "#B7FFE1"
        },
    ],
};
export const StaticsBoard : React.FC = () => {
    return (
        <VerticalLayout style={{
            width: "100%",
        }}>
            <Typography style={{
                fontSize: "28px",
                fontWeight: "Bold",
                marginTop: "40px"
            }}>Statistics</Typography>
            <HorizontalLayout style={{
                width: "100%",
                height: "30px",
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography style={{
                    color: '#9F9F9F',
                    fontSize: '20px',
                    fontWeight: 'Medium'
                }}>Overview</Typography>
                <HorizontalLayout>
                    <HorizontalLayout style={{
                        alignItems: 'center',
                        marginRight: "20px"
                    }}>
                        <Icon icon="vaadin:circle"
                              style={{
                                  color : "#FF9284",
                                  width: '15px',
                                  margin: '10px'
                              }}/>
                        <Typography style={{
                            color: '#373737',
                            fontSize: '20px',
                            fontWeight: 'Medium'
                        }}>Expenses</Typography>
                    </HorizontalLayout>
                    <HorizontalLayout style={{
                        alignItems: 'center'
                    }}>
                        <Icon icon="vaadin:circle"
                              style={{
                                  color : "#B7FFE1",
                                  width: "15px",
                                  margin: '10px'
                              }}/>
                        <Typography style={{
                            color: '#373737',
                            fontSize: '20px',
                            fontWeight: 'Medium'
                        }}>Earnings</Typography>
                    </HorizontalLayout>
                </HorizontalLayout>
            </HorizontalLayout>
            <Paper style={{
                padding: "50px 20px 20px",
                backgroundColor: "#373737",
                borderRadius: "20px",
                marginTop: "30px",
                width: "calc(100% - 40px)",
                height: "100%"
            }}>
                <HighchartsReact highcharts={Highcharts} options={options}/>
            </Paper>
        </VerticalLayout>
    )
}