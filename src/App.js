import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cleanCode, setCleanCode] = useState(0)
  const [cleanCoder, setCleanCoder] = useState(0)
  const [cleanArchitecture, setCleanArchitecture] = useState(0)
  const [tdd, setTdd] = useState(0)
  const [legacyCode, setLegacyCode] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  let bookArr = []

  useEffect(() => {
    bookArr = [
      ...Array(cleanCode).fill('cleanCode'),
      ...Array(cleanCoder).fill('cleanCoder'),
      ...Array(cleanArchitecture).fill('cleanArchitecture'),
      ...Array(tdd).fill('tdd'),
      ...Array(legacyCode).fill('legacyCode')
    ]
  }, [cleanCode, cleanCoder, cleanArchitecture, tdd, legacyCode])

  const calculateBooksPrice = (bookArr) => {
    let totalPrice = 0

    while (!bookArr.every(book => !book)) {
      const differentBooksArr = []
      bookArr.forEach((book, i) => {
        if (!differentBooksArr.includes(book) && book) {
          differentBooksArr.push(book)
          bookArr[i] = false
        }
      });

      switch (differentBooksArr.length) {
        case 1:
          totalPrice += 1 * 50
          break;
        case 2:
          totalPrice += 2 * 50 * 0.95
          break;
        case 3:
          totalPrice += 3 * 50 * 0.9
          break;
        case 4:
          totalPrice += 4 * 50 * 0.8
          break;
        case 5:
          totalPrice += 5 * 50 * 0.75
          break;
        default:
          totalPrice = totalPrice
      }
    }

    setCleanCode(0)
    setCleanCoder(0)
    setCleanArchitecture(0)
    setTdd(0)
    setLegacyCode(0)
    setTotalPrice(totalPrice)
  }


  return (
    <div className="App">
      <img src="https://github.com/stephane-genicot/katas/raw/master/images/Kata_DevelopmentBooks_TDD.jpeg?raw=true" className="App-logo" alt="logo" />
      <p>
        Book price calculator - TDD
      </p>
      <div className="inputs">
        <label htmlFor="clean-code">Clean Code <input type="number" min={0} id="clean-code" value={cleanCode} onChange={e => setCleanCode(Number(e.target.value))}></input></label>
        <label htmlFor="clean-coder">The Clean Coder <input type="number" min={0} id="clean-coder" value={cleanCoder} onChange={e => setCleanCoder(Number(e.target.value))}></input></label>
        <label htmlFor="clean-architecture">Clean Architecture <input type="number" min={0} id="clean-architecture" value={cleanArchitecture} onChange={e => setCleanArchitecture(Number(e.target.value))}></input></label>
        <label htmlFor="tdd">Test Driven Development <input type="number" id="tdd" min={0} value={tdd} onChange={e => setTdd(Number(e.target.value))}></input></label>
        <label htmlFor="legacy-code">Legacy Code <input type="number" id="legacy-code" min={0} value={legacyCode} onChange={e => setLegacyCode(Number(e.target.value))}></input></label>
      </div>
      <br />
      <button onClick={() => calculateBooksPrice(bookArr)}>Calculate price</button>
      <h3>{totalPrice ? 'The total price is: ' + totalPrice : null}</h3>
    </div>
  );
}

export default App;
