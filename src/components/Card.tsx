import React from 'react';
import { RoutineObject} from '../App';
//import images
import Exercise from '../images/icon-exercise.svg';
import Play from '../images/icon-play.svg';
import SelfCare from '../images/icon-self-care.svg';
import Social from '../images/icon-social.svg';
import Study from '../images/icon-study.svg';
import Work from '../images/icon-work.svg';
import icon from'../images/icon-ellipsis.svg';
//style
import './Card.css';

let images : string[] = [Exercise, Play, SelfCare, Social, Study, Work];

type Props = {
    routine: RoutineObject;
    period: string
}

const Card : React.FC<Props> = (
    props
) => {
    let period : string = props.period;
    let img = images.find(image =>
         image.includes(props.routine.title.toLocaleLowerCase().split(' ')[0]))
    return (
        <div className="card">
            <div className={`image ${props.routine.title}`}>
              <img  src={img}  alt={props.routine.title}/>
            </div>
            <div className="infoContainer">
            <div className="info">
              <div>
                <h3>{props.routine.title}</h3>
                <img  src={icon}  alt={icon}/>
              </div>
              <h2>{props.routine.timeframes[(period==='daily'?'daily' :
              (period==='weekly'? 'weekly':'monthly'))].current}hrs</h2>
              <h4>Last week - {props.routine.timeframes[(period==='daily'?'daily' :
              (period==='weekly'? 'weekly':'monthly'))].previous}hrs</h4>
            </div>
            </div>
        </div>
    )
};

export default Card;