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
                    <div className='singleCard'>
                        <Card 
                           routine = {routine}
                           period = {props.period}
                        />
                    </div>)
            })}
        </div>
    )
};

export default Cards;