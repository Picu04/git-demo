import React from "react";
import './ToDoForm.css'

const GoalItemToShow=(props)=>{

     const onDeleteHandler=()=>{
      props.onDeleteHandlerId(props.id)
     }
    return(
        <>
       
       <div className="div_li">
       
        <li 
         key={props.id}
         onClick={onDeleteHandler}
         >
        {props.children}
        </li>
        </div>
        </>
      
    )
}

export default GoalItemToShow;