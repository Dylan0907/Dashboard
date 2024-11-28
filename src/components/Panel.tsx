import React from 'react';
import picture from'../images/image-jeremy.png';
//style
import './Panel.css';

type Props = {
    changePeriod: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Panel : React.FC<Props> = ({
    changePeriod
}) => {
    return (
        <div className="personal--card">
            <div className="personal---data">
              <img  src={picture}  alt="Jeremy"/>
              <div className="personal--card--name" >
                <h5>Report for</h5>
                <h2 className="person--name">Jeremy Robson</h2>
              </div>
            </div>
            <div className="period"> 
                <button value="daily" id="daily" onClick={changePeriod}>Daily</button>
                <button value="weekly"  id="weekly" onClick={changePeriod}>Weekly</button>
                <button value="monthly"  id="monthly" onClick={changePeriod}>Monthly</button> 
            </div>
        </div>
    )
};

export default Panel;