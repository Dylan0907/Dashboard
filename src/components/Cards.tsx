import React from 'react';
//components
import Card from './Card';
//style
import './Cards.css';

import { RoutineObject } from '../App';


type Props = {
    schedule: RoutineObject[];
    period:string
}

const Cards : React.FC<Props> = (
    props
) => {
    return (
        <div className="cards">
            {props.schedule.map((routine) => {
                return (
                        <Card 
                           routine = {routine}
                           period = {props.period}
                           key={routine.title}
                        />
                    )
            })}
        </div>
    )
};

export default Cards;