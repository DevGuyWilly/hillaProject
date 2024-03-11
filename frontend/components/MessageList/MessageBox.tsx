import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import {Icon} from "@hilla/react-components/Icon";
import {Button} from "@hilla/react-components/Button";
import {TextField} from "@hilla/react-components/TextField";
import "./MessageBox.css";

export const MessageBox : React.FC = () => {
    return (
        <VerticalLayout style={{
            width: "100%",
            height: "min-content",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
        }}>
            <HorizontalLayout style={{
                width: "100%",
                height: "80px"
            }}>
                <TextField placeholder={"Your message"} value="" clearButtonVisible className={"message-box"}
               style={{
                    width: "100%",
                    marginBottom: "20px",
                }}>
                    <Button slot="prefix" theme="icon" style={{
                        backgroundColor: 'transparent',
                        marginInline: "10px"
                    }}>
                        <Icon slot="prefix" icon="vaadin:paperclip" style={{
                            color: "#000",
                        }}/>
                    </Button>
                    <Button slot="suffix" theme="icon" style={{
                        backgroundColor: 'transparent',
                        marginRight: "15px"
                    }}>
                        <Icon slot="prefix" icon="vaadin:paperplane-o" style={{
                            color: "#000",
                        }}/>
                    </Button>
                </TextField>
            </HorizontalLayout>
            <HorizontalLayout style={{
                height: '100px'
            }}>

            </HorizontalLayout>
        </VerticalLayout>
    )
}
