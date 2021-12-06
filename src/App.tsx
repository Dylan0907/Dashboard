import React, { useState } from "react";
import './App.css';
//Components
import Panel from './components/Panel';
import Cards from './components/Cards';
//JSON
import data from './data.json';

export type RoutineObject = {
  title: string;
  timeframes : TimeframesObject
};

export type TimeframesObject = {
  daily: FrequenceObject;
  weekly: FrequenceObject;
  monthly: FrequenceObject;
};

type FrequenceObject = {
  current: number;
  previous: number;
};


function App() {

  const [period, setPeriod] = useState("daily");
  const [schedule, setSchedule] = useState<RoutineObject[]> (data);

  const changePeriod = (e : React.MouseEvent<HTMLButtonElement>) => {
    let newPeriod = e.currentTarget.value;
    setPeriod(newPeriod);
  };

  return (
    <div className="container">
      <div className="panel">
      <Panel
           changePeriod={changePeriod} 
        />
      </div>
      <div className="cardsContainer">
      <Cards 
          schedule = {schedule}
          period = {period}
        />
      </div>
    </div>
  );
}

export default App;
