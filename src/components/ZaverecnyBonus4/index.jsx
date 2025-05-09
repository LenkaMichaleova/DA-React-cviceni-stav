import { useState } from 'react'
import './style.css'
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  return (
    <div className='bonus4'>
      <input type="number" onChange={(e) => setNumber1(Number(e.target.value))} defaultValue={number1} /> +{' '}
      <input type="number" onChange={(e) => setNumber2(Number(e.target.value))} defaultValue={number2} /> = 
      <output>{number1 + number2}</output>
    </div>
  )
}
