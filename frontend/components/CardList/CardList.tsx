import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout";
import {PaymentCard} from "Frontend/components";
import React, {useEffect, useRef, useState} from "react";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {Add} from "@mui/icons-material";

const cards = [
    {
        id: 0,
        owner: "Smith Rowe",
        number: "2345 5678 8765 4321",
        amount: "43,050.00",
        active: true
    },
    {
        id: 1,
        owner: "Smith Rowe",
        number: "2345 5678 8765 4321",
        amount: "43,050.00",
        active: true
    },
    {
        id: 2,
        owner: "Smith Rowe",
        number: "2345 5678 8765 4321",
        amount: "43,050.00",
        active: true
    }
];
export const CardList : React.FC = () => {
    const [scrollTimeout, setScrollTimeOut] = useState(0);
    const cardContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollListener = () => {
            clearTimeout(scrollTimeout);
            setTimeout(() => {
                const scrollLeft = cardContainer.current?.scrollLeft || 0;
                const itemWidth = cardContainer.current?.offsetWidth || 0;
                const snappedPosition = Math.round(scrollLeft / itemWidth) * itemWidth;
                cardContainer.current?.scrollTo({
                    left: snappedPosition,
                    behavior: 'smooth',
                })

            }, 150)
        };
        cardContainer.current?.addEventListener('scroll', scrollListener);
        return () => {
            cardContainer.current?.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <VerticalLayout>
            <Typography style={{
                fontSize: "24px",
                fontWeight: "Bold",
                marginBottom: "25px"
            }}>Active Cards</Typography>
            <div
                ref={cardContainer}
                style={{
                    width: "100%",
                    height: "min-content",
                    display: "flex",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    whiteSpace: "nowrap",
                    overflowY: 'hidden'
                }}>
                {
                    cards.map(card =>
                        <PaymentCard key={card.id} {...card}/>
                    )
                }
            </div>
            <Button style={{
                borderRadius: "20px",
                border: "4px solid #000",
                width: "100%",
                height: "60px",
                marginTop: "20px",
            }}>
                <Add fontSize={"large"} style={{color: "#000"}}/>
                <Typography style={{
                    color: "#373737",
                    fontSize: 20,
                    fontWeight: 'SemiBold',
                    textTransform: 'capitalize'
                }}>Add Card</Typography>
            </Button>
        </VerticalLayout>
    )
}