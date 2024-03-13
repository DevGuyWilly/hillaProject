import {List} from "@mui/material";
import {NavbarData} from "./NavbarData";
import {NavItem} from "Frontend/components";
import React, {useEffect, useState} from "react";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Logo from "Frontend/assets/logo.png";
import {Link} from "react-router-dom";
import {ChatEndPoint} from "Frontend/generated/endpoints";

export const Navbar : React.FC = () => {
    const [allUnviewed, setAllUnviewed] = useState(0);

    useEffect(() => {
        ChatEndPoint.countUnViewed().then(count => {
            setAllUnviewed(count);
        })
    }, []);

  return(
      <VerticalLayout theme="spacing" style={{
          width: "100%",
          alignItems: 'flex-start',
          height: "100%",
      }}>
          <Link to="/">
              <img style={{
                  width: "243px",
                  height: "61px",
                  marginTop: "30px",
                  marginBottom: "130px",
                  backgroundColor: "#373737"
              }} src={Logo} alt="Assurance"/>
          </Link>
          {NavbarData.map(data =>
              <NavItem
                  key={data.path}
                  path={data.path}
                  menu={data.title}
                  icon={data.icon}
                  iconSelected={data.iconSelected}
                  newCount={data.title === "Messages" ? allUnviewed : 0}
              />
          )}
      </VerticalLayout>
  )
}