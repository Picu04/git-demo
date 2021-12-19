import React, { useState } from 'react'
import ToDOForm from './ToDOForm'
import List from './List'



const App = () => {
  const [value, setValue] = useState([
    { text: '', id: Math.random().toString() },
  ])
  // const [remove,setRemove]=useState(value)
  const ondataHandler = (items) => {
    setValue([{ text: items, id: Math.random().toString() }, ...value])

    console.log(value)
  }

  // const deleteHandler =()=>{
  //   setRemove([])
  // }

  const doDeleteHandler = (selectedID) => {
    // console.log('seleelidd*****-----')
    // console.log(selectedID)
    const delData = value.filter((val) => {
      return val.id !== selectedID
      console.log(selectedID)
      console.log(val.id)
    })
    

    setValue(delData)
  }
  

  return (
    <>
      <ToDOForm dataHandler={ondataHandler} />
      <List value={value} onDelete={doDeleteHandler} />
      {/* <button onClick={deleteHandler}>delete</button> */}
    </>
  )
}

export default App
