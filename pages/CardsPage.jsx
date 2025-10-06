import React from 'react';
import Cards from '../components/soloProject/Cards';
import { dataCards } from '../components/Data/cardsData';


export default function CardsPage (){

    return (
        <div className="cards-page">
            <h2>Cards</h2>
            <div className="cards-container">
                {dataCards.map(card => (
                    <Cards
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        hoverable={card.hoverable}
                        forceHover={card.forceHover}
                        debug={card.debug}
                    />
                ))}
            </div>
        </div>
    )
}
