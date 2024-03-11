import {List} from "@mui/material";
import {NavbarData} from "./NavbarData";
import {NavItem} from "Frontend/components";
import React from "react";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Logo from "Frontend/assets/logo.png";
import {Link} from "react-router-dom";

export const Navbar : React.FC = () => {
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
                  newCount={2}
              />
          )}
      </VerticalLayout>
  )
}