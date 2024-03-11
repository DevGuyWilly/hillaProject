import {AvatarGroup} from "@hilla/react-components/AvatarGroup";
import {Add, PlusOne, SwapHoriz} from "@mui/icons-material";
import {Button, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import "./FamilyInsurance.css";
import {Avatar} from "@hilla/react-components/Avatar";
import AddImg from "../../assets/add.png";

const Family = [
    {id: 0, firstName: 'Adam', lastName: 'Su', avatar: "" },
    {id: 1, firstName: 'Adam', lastName: 'Su', avatar: "" },
    {id: 2, firstName: 'Adam', lastName: 'Su', avatar: "" },
    {id: 3, firstName: 'Adam', lastName: 'Su', avatar: "" },
]

export interface FamilyInsurancePrpos {

}

export const FamilyInsurance : React.FC<FamilyInsurancePrpos> = (props) => {
    return (
        <HorizontalLayout style={{
            backgroundColor: "#F5F5F5",
            alignItems: 'center',
            borderRadius: "20px",
            width: '100%',
            height: '88px',
            marginTop: '35px',
            paddingInlineStart: "32px",
            paddingTop: "18px",
            paddingBottom: "18px",
            justifyContent: 'space-between'
        }}>
            <HorizontalLayout
                theme={"spacing-l"}
                style={{
                    width: '100%',
                    alignItems: 'center'
            }}>
                <Typography style={{
                    fontWeight: "semibold",
                    fontSize: "20px",
                    width: "33%",
                    alignSelf: 'start'
                }}>
                    Family <br/> Insurance
                </Typography>
                <AvatarGroup items={Family.map(person => ({
                    name: `${person.firstName} ${person.lastName}`,
                    colorIndex: person.id,
                    img: person.avatar
                }))}>
                    <Avatar style={{
                        color: "#FFF",
                        backgroundColor: "#373737",
                    }} img={AddImg}>

                    </Avatar>
                </AvatarGroup>

                <Typography style={{
                    whiteSpace: "nowrap",
                    fontSize: "24px",
                    fontWeight: "Bold",
                    marginRight: "20px",
                }}>$ 43,000.00</Typography>
            </HorizontalLayout>
            <HorizontalLayout
                theme={"spacing-l"}
                style={{
                    alignItems: 'center'
            }}>
                <IconButton style={{
                    margin: "20px"
                }}>
                    <SwapHoriz />
                </IconButton>
                <Button style={{
                    color: "white",
                    width: '180px',
                    height: '88px',
                    fontSize: '22px',
                    fontWeight: 'medium',
                    backgroundColor: "#373737",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px"
                }}>Top Up</Button>
            </HorizontalLayout>
        </HorizontalLayout>
    )
}