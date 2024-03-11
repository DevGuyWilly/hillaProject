import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {TextField} from "@hilla/react-components/TextField";
import {Icon} from "@hilla/react-components/Icon";
import {ContactItem} from "Frontend/components/ContactList/ContactItem";
import "./ContactList.css";

const peoples = [
    {
        id: 1, firstName: "James", lastName: "Camps", message: "Here is the updated  ds  sdfwfsd dfwefd", isChatting: true, unviewedMsgs: 0
    },
    {
        id: 2, firstName: "James", lastName: "Camps", message: "Here is the updated dfasdf dated  ds  sdfwfsd dfwefd", isChatting: false, unviewedMsgs: 2
    },
    {
        id: 3, firstName: "James", lastName: "Camps", message: "Here is the updated dfasdf dated  ds  sdfwfsd dfwefd", isChatting: false, unviewedMsgs: 0
    },
    {
        id: 4, firstName: "James", lastName: "Camps", message: "Here is the updated dfasdf dated  ds  sdfwfsd dfwefd", isChatting: false, unviewedMsgs: 2
    },
    {
        id: 5, firstName: "James", lastName: "Camps", message: "Here is the updated dfasdf dated  ds  sdfwfsd dfwefd", isChatting: false, unviewedMsgs: 0
    }
]
export const ContactList : React.FC = () => {
    return(
        <VerticalLayout style={{
            minWidth: "429px",
            maxWidth: "429px",
            padding: "24px 22px",
            backgroundColor: "#F5F5F5",
            borderRadius: "20px",
            height: "100%"
        }}>
            <TextField placeholder={"Search"} value="" clearButtonVisible className="contact-search" style={{
                width: "100%",
                marginBottom: "20px"
            }}>
                <Icon slot="prefix" icon="vaadin:search" style={{
                    marginLeft: "10px"
                }}/>
            </TextField>
            <VerticalLayout style={{
                width: "100%"
            }}>
                {peoples.map(people =>
                    <ContactItem key={people.id} {...people}/>)}
            </VerticalLayout>
        </VerticalLayout>
    )
}