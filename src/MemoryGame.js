import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Card from './Card';



const CardState= {
    hiding: 0,
    showing: 1,
    matching: 2
}

export default class MemoryGame extends Component{
    constructor(props){
        super(props);

        let cards = [
            {id: 0, cardSate: CardState.hiding, backgroundColor: 'red'},
            {id: 1, cardState:CardState.hiding, backgroundColor: 'red'},
            {id: 2, cardState:CardState.hiding, backgroundColor: 'navy'},
            {id: 3, cardState:CardState.hiding, backgroundColor: 'navy'},
            {id: 4, cardState:CardState.hiding, backgroundColor: 'green'},
            {id: 5, cardState:CardState.hiding, backgroundColor: 'green'},
            {id: 6, cardState:CardState.hiding, backgroundColor: 'yellow'},
            {id: 7, cardState:CardState.hiding, backgroundColor: 'yellow'},
            {id: 8, cardState:CardState.hiding, backgroundColor: 'black'},
            {id: 9, cardState:CardState.hiding, backgroundColor: 'black'},
            {id: 10, cardState:CardState.hiding, backgroundColor: 'purple'},
            {id: 11, cardState:CardState.hiding, backgroundColor: 'purple'},
            {id: 12, cardState:CardState.hiding, backgroundColor: 'pink'},
            {id: 13, cardState:CardState.hiding, backgroundColor: 'pink'},
            {id: 14, cardState:CardState.hiding, backgroundColor: 'lightskyblue'},
            {id: 15, cardState:CardState.hiding, backgroundColor: 'lightskyblue'}
        ];

        cards = shuffle(cards);
        this.state = {cards, noClick: false};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id){
        this.setState(prevState => {
            let cards = prevState.cards.map(c => (
                c.id === id ? {
                    ...c,
                    cardState: c.cardState === CardState.hiding ? CardState.matching:
                    CardState.hiding
                } : c
            ));
            return {cards};
        })
    }

    render(){
        const cards = this.state.cards.map((card) =>(
            <Card 
            key={card.id} 
            showing={card.cardState !== CardState.hiding} 
            backgroundColor={card.backgroundColor}
            onClick={() => this.handleClick(card.id)} 
            />
        ));
        return(
            <div>
                <Navbar />
                {cards}
            </div>
        )
    }
}

