import React from 'react'
import Child from './Child'

function Students({students, tm}) 
{
  
    console.log(students)
    console.log(tm)

  return (
    <div>
        <h1>Students</h1>
        <h2>TM {tm}</h2>
        {
            students.map((student)=>(
               <div key={student.name} className='mt-4 card'>
                  <h3>Name: {student.name} age: {student.age}</h3>
               </div>
            ))
        }
        <Child students={students} tm={tm}/>
    </div>
  )
}

export default Students