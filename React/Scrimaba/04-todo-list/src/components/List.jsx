import React from 'react'
export default function List(props) {
  console.log('props', props?.dataVal)
  return (
    <li >
      <div className='row '>
        <div className='col-6 '>
          {props.editing ? <input type='text' className='form-control' onChange={(event)=> props.onEditing(event,props.id)} value={props.dataVal} name='tName'/> : <span >{props.dataVal}</span>}
        </div>
        <div className='col-6 mb-3'>
          <button className='d-inline-flex  btn btn-warning' onClick={props.editTask}>{props.editing ?'Save':'Edit'}</button>
        </div>
      </div>
    </li>
  )
}