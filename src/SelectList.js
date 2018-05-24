import * as React from "react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';



const options = [
  { value: 'ricksanchez', label: 'Rick Sanchez' },
  { value: 'mortysmith', label: 'Morty Smith' },
  { value: 'bethsmith', label: 'Beth Smith' }
]

export const SelectList = () => (
  <div className="container">
  <Select
   options={options}/>
  </div>
)