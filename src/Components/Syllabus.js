import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import SyForm from "./Form";
import SyCard from "./Card";

function Syllabus()
{
    const [cardDetails, setCardDetails] = useState([]);

    const ShowForm = () => {
        const cloneCardDetails = [...cardDetails];
        cloneCardDetails.push({ 
            title : "", 
            description : "", 
            objectives : "", 
            editMode : true,
            cancelStatus:false,
        });
        setCardDetails(cloneCardDetails);
    }

    const saveForm = (cardIndex, formDetails) =>
    {
        const cloneCardDetails = [...cardDetails];
        cloneCardDetails.map((card) => 
        {
            if (card.cancelStatus === false)
            {
                cloneCardDetails[cardIndex] = formDetails;
                setCardDetails(cloneCardDetails);
            }
        })
    }

    const cancelForm = () => {
        const cloneCardDetails = [...cardDetails];
        cloneCardDetails.map((card, index) => {
            if (card.cancelStatus === false)
            {
                cloneCardDetails.splice(index, 1);
                setCardDetails(cloneCardDetails)
            }
        });
        const clonedCards = cloneCardDetails.map((card) => ({...card, editMode: false}));
        setCardDetails(clonedCards);
      };

    const editCard = (cardIndex) =>
    {
        const clonedCards = [...cardDetails]
        clonedCards.map((card, index) => {
            if (index === cardIndex) {
                card.editMode = true
                card.cancelStatus = false
                setCardDetails(clonedCards)
            } 
        });
    }

    const deleteCard = (index) =>
    {
        const cloneCardDetails = [...cardDetails];
        cloneCardDetails.splice(index, 1);
        setCardDetails(cloneCardDetails);
    }

    return(
        <div>
            <Button onClick={ShowForm} variant="primary" style={{position:"absolute", top: "0", right: "0",}}>+</Button>
            {cardDetails.map((card, index) => {
                return (card.editMode? 
                    (<SyForm key={index} index={index} card={card} saveForm={saveForm} cancelForm={() => cancelForm(index)}/>):
                    (<SyCard key={index} index={index} card={card} editCard={() => editCard(index)} deleteCard={() => deleteCard(index)}/>)
                )
            })}
        </div>
    )
}

export default Syllabus;


