import HomeIcon from "../../assets/HomeIcon.png";
import HomeIcon1 from "../../assets/HomeIcon1.png";
import Chat_Conversation from "../../assets/Chat_Conversation.png";
import Chat_Conversation1 from "../../assets/Chat_Conversation1.png";
import Credit_Card from "../../assets/Credit_Card.png";
import Credit_Card1 from "../../assets/Credit_Card1.png";
import PaymentPayment from "../../assets/Payment.png";
import PaymentPayment1 from "../../assets/Payment1.png";

export const NavbarData = [
  {
    icon: HomeIcon1,
    iconSelected: HomeIcon,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Credit_Card,
    iconSelected: Credit_Card1,
    title: "Credit",
    path: "/credit",
  },
  {
    icon: PaymentPayment,
    iconSelected: PaymentPayment1,
    title: "Payments",
    path: "/payment",
  },
  {
    icon: Chat_Conversation,
    iconSelected: Chat_Conversation1,
    title: "Messages",
    path: "/messages",
  },
];
