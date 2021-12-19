import React from 'react'
import GoalItemToShow from './GoalItemToShow'

const List = (props) => {
//   const deleteHandler = () => {
//     props.onDelete(mappingItems)
//   }

  const mappingItems = props.value.map((ele) => {
    return (
      // <div key={ele.id}>
      //     <li onClick={deleteHandler} >
      //     {ele.text}
      //     {console.log(ele.text)}
      //     </li>

      // </div>
     <ul>
        
      <GoalItemToShow key={ele.id} id={ele.id}  onDeleteHandlerId={props.onDelete}>
        {ele.text}
      </GoalItemToShow>
      </ul>
    )
  })

//   console.log('******')
//   console.log(mappingItems)

  return (
    <div>
      {
        //  props.value.map(((ele)=>{
        //      return(
        //         <div key={ele.id}>
        //             <li onClick={deleteHandler} >
        //             {ele.text}
        //             </li>
        //         </div>
        //      )
        //  }))
      }
        <h3>Your Upcoming ToDo Lists</h3>

      {mappingItems}
    </div>
  )
}

export default List

// map(()=>{},index)
// map((ele,index)=>{

// })
