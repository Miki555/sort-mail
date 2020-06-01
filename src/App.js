import React, {useState} from 'react';
import './App.css';
import {mails as MailsData} from './emails';
import sortBy from 'lodash/sortBy';
import logo from './img/logo.png';

import Form from './Form';

// const FROM = 'FROM'
// const TO = 'TO'
// const DATE = 'DATE'

const getClass = (heading, currentSort, defaultClass) => heading === currentSort ? `${defaultClass} sorted` : defaultClass

function App() {
  const [searched, setSearched] = useState(false)
  const [mails, setMails] = useState(MailsData)
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [currentSort, setCurrentSort] = useState(null)

  const [mona, setMona] = useState('STUDYING')

  // const searched = true

  // const functiontoChnageSearched = value => {
  //   searched = value
  // }
  
  return (
    <>
     <Form searched={searched} setSearched={setSearched} dates={dates} setDates={setDates} mona={mona}/>
    <section>
      <h2>
        Results:
      <div>{mails.filter(mail => mail.datetime >= dates[0] && mail.datetime <= dates[1]).length}</div>
        mail(s)
      </h2>
      <div class="mail-block">
    {searched ?　<table className="App">
      <thead>
        <tr>
          <th class={getClass('from', currentSort, "thead-from" )} onClick={() => {
            setCurrentSort('from')
            setMails(sortBy(mails, 'from'))
      }}>From</th>
          <th class={getClass('to', currentSort, "thead-to" )} onClick={() => {
            setCurrentSort('to')
            setMails(sortBy(mails, 'to'))
  
      }} >To</th>
          <th class="thead-subject">Subject</th>
          <th class={getClass('datetime', currentSort, "thead-date" )} onClick={() => {
            setCurrentSort('datetime')
            setMails(sortBy(mails, 'datetime'))
      }}>Date</th>
        </tr>
      </thead>
      
      <tbody>
        {mails.filter(mail => mail.datetime >= dates[0] && mail.datetime <= dates[1]
        ).map(mail => (
          <tr>
            <td class="tbody-from">{mail.from}</td>
            <td class="tbody-to">{mail.to}</td>
            <td class="tbody-subject">{mail.subject}</td>
            <td class="tbody-time">{mail.month} {mail.date}</td>
          </tr>
        ))}
      </tbody>
    </table> :  <img src={logo} alt="" class="logo" />}
      </div>
    </section>
        <button onClick={() => {setMona('EAT')}}>{mona}</button>
    </>
  );
}

export default App;
