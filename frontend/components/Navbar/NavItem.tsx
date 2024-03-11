import {Badge, Button, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

export interface NavItemProps {
    icon: string;
    iconSelected: string,
    menu: string;
    path: string;
    newCount?: number
}
export const NavItem : React.FC<NavItemProps> = (props) => {
    const location = useLocation();
    const isMatch = location.pathname.includes(props.path);

    return (
            <Button component={Link} to={props.path} style={{
                width: "100%"
            }}>
                <ListItem key={props.path} style={{
                    paddingInlineStart: 0
                }}>
                    <ListItemIcon>
                        <img src={isMatch ? props.iconSelected : props.icon} alt={props.menu} style={{maxWidth: '38px', maxHeight: '38px'}}/>
                    </ListItemIcon>
                    <ListItemText primary={props.menu} style={{
                        fontWeight: 600,
                        fontSize: "22px",
                        textTransform: 'capitalize',
                        color: isMatch ? "#FFF": "#9F9F9F"
                    }}/>
                    {props.newCount && <Badge
                        badgeContent={props.newCount}
                        color="error"
                        sx={{
                            [`& .MuiBadge-colorError`]: {
                                backgroundColor: "#FF7070",
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%",
                                fontWeight: "SemiBold",
                                fontSize: "16px"
                            },
                        }}
                    />}
                </ListItem>
            </Button>
    )
}