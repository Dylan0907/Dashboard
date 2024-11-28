import React, { useEffect, useState } from "react";
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
  const [schedule] = useState<RoutineObject[]> (data);
  

  useEffect (()=>{
    document.getElementById(period)?.classList.add("btn--selected")
  },[period])

  const changePeriod = async (e : React.MouseEvent<HTMLButtonElement>) => {
    document.getElementById(period)?.classList.remove("btn--selected");
    let newPeriod = await e.currentTarget.id;
    setPeriod(newPeriod);
  };

  return (
    <div className="container">
      <Panel
           changePeriod={changePeriod} 
        />
      <Cards 
          schedule = {schedule}
          period = {period}
        />
    </div>
  );
}

export default App;
