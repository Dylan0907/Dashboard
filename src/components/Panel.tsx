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
        <div className="panel">
            <div className="id">
              <img  src={picture}  alt="Jeremy"/>
              <h5>Report for</h5>
              <h2>Jeremy</h2>
              <h2>Robson</h2>
            </div>
            <div className="period"> 
                <div>
                    <button value="daily" onClick={changePeriod}>Daily</button>
                    <button value="weekly" onClick={changePeriod}>Weekly</button>
                    <button value="monthly" onClick={changePeriod}>Monthly</button>
                </div>   
            </div>
        </div>
    )
};

export default Panel;