import React, { useEffect, useState } from 'react'
import Quiz from './Quiz'
import data from '/src/data'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

const Main = () => {
  const [stateData, setStateData] = useState([])
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    let myData = data.results
    let objData = myData?.map((data) => {
      return ({ id: nanoid(), condition: false, question: data })
    })
    setStateData(objData)
  }, [])

  function submitFunc() {
    if(stateData){
    let selectedArr = stateData.filter((data) => {
      return data.condition === true
    })
    setCnt(selectedArr.length);
  } else{

  }

  }



  let quiz = stateData?.map((que) => {
    return <Quiz key={que.id} id={que.id} que={que.question} setStateData={setStateData} />

  })


  return (
    <div className='container pt-5 '>
      {cnt ?
        <>
          <Confetti />
          <div className='d-flex flex-column justify-content-center align-items-center h-75 fw-bold w-100'>
            <h3 className='p-4 bg-success rounded-pill text-white h1'> 
              Hurray
            </h3>
            <p  className='h2 mt-3'>{cnt}/{stateData.length}</p>
          </div>
        </>
        :
        <>
          {quiz}
        </>
      }
      <div className='text-center mt-5 h-25   '>
        <button className='btn btn-primary w-25' onClick={submitFunc}>{!stateData?'submit':'play again'}</button>
      </div>




    </div>
  )
}

export default Main