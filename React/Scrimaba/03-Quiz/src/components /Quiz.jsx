import React, { useEffect, useState } from 'react'
import Answers from './Answers'
import { nanoid } from 'nanoid'

const Quiz = (props) => {
  let que = props.que;
  let ansArr = que.incorrect_answers;
  // const 
  const [ansState, setAnsState] = useState([])

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    let arr = [...ansArr, que.correct_answer];
     arr = shuffleArray(arr);
    arr = arr.map((data) => {
      return ({ id: nanoid(), value: data, isSelected: false })
    })
    setAnsState(arr);
  }, [])

  function selectAnswer(event, id) {
    let tempCond = event.target?.textContent.trim() === que.correct_answer
    props.setStateData((prev)=>{
      let x = prev.map((data)=> data.id === props.id ?{...data,condition:tempCond} :data)
        return x;
      // return ({...prev,condition:tempCond})
    })

    setAnsState((prev) => {
      return prev.map((obj) => id === obj.id ? { ...obj, isSelected: !obj.isSelected } : { ...obj, isSelected: false })
    })
  }

  let ans = ansState?.map((data) => {
    return <Answers key={data.id}
      value={data.value}
      isSelected={data.isSelected}
      selectAnswer={(event) => selectAnswer(event, data.id)} />
  })

  return (
    <div className='mb-4'>
      <h4 className='question'> {que?.question} </h4>
      <div className='answers'>
        <ul className='d-flex gap-2 list-unstyled '>
          {ans}
        </ul>
      </div>
    </div>
  )
}

export default Quiz