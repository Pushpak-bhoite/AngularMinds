import React from 'react'
const Answers = (props) => {
  return (
    <li ><button onClick={props.selectAnswer} className={`btn btn${props?.isSelected?'-success' : "-outline-secondary"} rounded-pill`}>{props?.value} </button></li>
  )
}

export default  Answers