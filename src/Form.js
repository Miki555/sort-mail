import './Form.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import icon from './img/icon_search.svg'



function Form({searched, setSearched, dates, setDates}) {
  

  
  return (
    <form action="" id="search-form">
      <label class="date-label">
      <DateRangePicker
        onChange={dates => {
          setDates(dates)}
        }
        value={dates}
        clearIcon={null}
        format={"y/MM/dd"}
      />
      </label>

      <div class="search-btn" onClick={() => {
        setSearched(!searched)
      }}>
        <img src={icon} alt="" />
      </div>
    </form>
    
  );
}

export default Form;
