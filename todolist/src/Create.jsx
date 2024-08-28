import React, { useState } from 'react'
import './Create.css'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
          axios.post('http://localhost:3000/add',{task: task})
          .then(result => {
              location.reload()
          })
          .catch(err => console.log(err))
    }
  return (
    <div className='create'>
      <input type="text"  placeholder='Enter Text' onChange={(e) => setTask(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
