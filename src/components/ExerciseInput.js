import { getValue } from '@testing-library/user-event/dist/utils'
import React, {useState} from 'react'

export const ExerciseInput = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
      e.preventDefault();
      addTodo(value);
      setValue("");
    }

    
  return (
    <form className='ExerciseInput' onSubmit={handleSubmit}>
      <input type="text" className="exercise-input" value={value} placeholder='Which muscle group to target today?' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Muscle</button>
    </form>
  )
}
