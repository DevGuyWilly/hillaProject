import React from 'react';
import {Drawer} from '@mui/material';
import Typography from '@mui/material/Typography';
import {ActivityList, CardList, FamilyInsurance, InsuranceList} from "Frontend/components";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {StaticsBoard} from "Frontend/components/StaticsBoard/StaticsBoard";

export const Dashboard : React.FC = () => {
    return (
        <>
            <VerticalLayout style={{
                width: "calc(100% - 780px)",
                backgroundColor: 'background.default',
                paddingTop: '32px',
                paddingInlineStart: '40px' }}>
                <Typography style={{
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "39px",
                }}>Dashboard</Typography>
                <Typography style={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "24.4px",
                }}>Check and maintain your insurance status</Typography>
                <InsuranceList />
                <FamilyInsurance />
                <StaticsBoard />
            </VerticalLayout>
            <Drawer
                variant="permanent"
                anchor="right"
                sx={{
                    width: "400px",
                    [`& .MuiDrawer-paper`]: {
                        borderLeft: 'none',
                        width: "400px",
                        boxSizing: 'border-box',
                        paddingTop: '130px',
                        paddingBottom: '32px',
                        paddingInline: "40px",
                        overflowY: "auto"
                    },
                }}
            >
                <ActivityList />
                <CardList/>
            </Drawer>
        </>
    );
};

export default Dashboard;
