// Counter
import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case 'Increment':
            return{count: state.count+1}

        case 'Decrement':
            return{count: state.count-1}

        case 'RESET':
            return{count: 0}

    default: 
        return state;
    }
   
}

function Thirteen() {

    const [state,dispatch] = useReducer(reducer,{count:0});
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: 'Increment'})}> + </button>
        <button onClick={()=> dispatch({type: "Decrement"})}> - </button>
        <button onClick={()=> dispatch({type: "RESET"})}> Reset </button>
    </div>
  )
}

export default Thirteen