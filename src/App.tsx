import React, { useEffect, useState } from 'react';
import Title from './Components/Title';
import Segments from './Components/Segments';
import './App.css';
import SearchForm from './Components/SearchForm';
import { calculateDeliveries } from './utils/calculateDeliveries';
import { checkInputValue } from './utils/checkInputValue';
import { IInventory } from './Components/Segment/types';


const scheduledDeliveries: IInventory[] = [
  {date: new Date(2022, 6, 8), quantity: 39},
  {date: new Date(2022, 6, 9), quantity: 10},
  {date: new Date(2022, 6, 10), quantity: 0},
  {date: new Date(2022, 6, 11), quantity: 31},
  {date: new Date(2022, 6, 12), quantity: 9},
  {date: new Date(2022, 6, 13), quantity: 500},
  {date: new Date(2022, 6,14), quantity: 74},
];

function App() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [newScheduledDeliveries, setNewScheduledDeliveries] = useState<IInventory[]>([]);

  useEffect(()=> {
      if (checkInputValue(inputValue)) {
      setNewScheduledDeliveries([]);
    }
    else {
      setNewScheduledDeliveries(calculateDeliveries(inputValue, scheduledDeliveries))
    }
  }, [inputValue])

  const searchInputHandler = (input: number): void => {
    setInputValue(input);
  }
  
  return (
    <div className="App">
     <Title />
     <Segments data={newScheduledDeliveries}/>
     <SearchForm handleInputValue={searchInputHandler} />

    </div>
  );
}

export default App;
