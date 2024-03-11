import {routes} from 'Frontend/routes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Drawer, Switch} from "@mui/material";
import {Navbar} from "Frontend/components";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import React from "react";
export default function App() {
  return (
      <Router>
        <HorizontalLayout style={{
            height: "100%"
        }}>
          <Drawer
              variant="permanent"
              anchor="left"
              sx={{
                width: "350px",
                flexShrink: 0,
                backgroundColor: "#373737",
                [`& .MuiDrawer-paper`]: {
                  width: "350px",
                  boxSizing: 'border-box',
                  backgroundColor: "#373737",
                  paddingInline: "40px"
                },
              }}
          >
            <Navbar/>
          </Drawer>
          <Routes>
            {routes.map(route =>
                <Route path={route.path} element={route.element}/>
            )}
          </Routes>
        </HorizontalLayout>
      </Router>
  )
}
