import {BrowserRouter as Router, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {Drawer, Switch} from "@mui/material";
import {Navbar} from "Frontend/components";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import React, {useEffect} from "react";
import {SignIn} from "Frontend/views/Auth/SignIn";
import {SignUp} from "Frontend/views/Auth/SignUp";
import {ChatPage, Dashboard} from "Frontend/views";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "Frontend/redux/store";
import {UserEndPoint} from "Frontend/generated/endpoints";
import {AuthSelectors} from "Frontend/redux/feat/auth/authSelectors";
import {useAppDispatch} from "Frontend/redux/hooks";
import {AuthActions} from "Frontend/redux/feat/auth/authSlice";

export const MainComponent = () => {
    const me = useSelector(AuthSelectors.getCurrentUser());
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const userString = sessionStorage.getItem("user");
        if(userString) {
            dispatch(AuthActions.setCurrentUser(JSON.parse(userString)));
        }
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            me && UserEndPoint.out(me);
            event.returnValue = '';
        }
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);

    useEffect(() => {
        if(!me) {
            navigate("/login")
        }
    }, [me])

    return (
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
                <Route path="*" Component={Dashboard}/>
                <Route path="messages" Component={ChatPage}/>
            </Routes>
        </HorizontalLayout>
    )
}
export default function App() {
  return (
      <Provider store={store}>
          <Router>
              <Routes>
                  <Route path="/*" Component={MainComponent}/>
                  <Route path="/login" Component={SignIn}/>
                  <Route path="/signup" Component={SignUp}/>
              </Routes>
          </Router>
      </Provider>
  )
}
