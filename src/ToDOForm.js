import React, { useState } from 'react'
import List from './List'
import './ToDoForm.css'

const ToDOForm = (props) => {
  const [items, setItems] = useState('')

  // const[items,setItems]=useState({text:'',id:Math.random().toString()})

  const changeHandler = (event) => {
    setItems(event.target.value)
    //  setItems({text:event.target.value})
    console.log(items)
  }

  const clickHandler = (event) => {
    event.preventDefault()

    props.dataHandler(items)
    //   console.log(record)

    setItems('')
  }

  return (
    <div className='main_div'>
      <form className="_form">
        <label>Enter To do Items below:</label>
        <input type="text" onChange={changeHandler} value={items} />
        <br />
        <button className='_btn'  onClick={clickHandler}>Add List</button>
      </form>

      {/* <List record={record}/> */}

      {/* {
             record.map((ele)=>{
                 return(
                     <div>
                         {ele}
                     </div>
                 )
             })
         } */}
    </div>
  )
}

export default ToDOForm
