import React, { useState } from 'react'
import * as yup from "yup"

export default function AddStudent(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [error, setError] = useState('')

  let schema = yup.object().shape({
    name: yup.string().max(10).min(3).required(),
    email: yup.string().email("Must be a valid email address").required(),
    rollNo: yup.number().required().typeError("Must be a number").min(6),
  })

  const onClickHandler = async () => {


    let data = {
      name: name,
      email: email,
      rollNo: rollNo
    }
    try {
      let result = await schema.validate(data)
      console.log("result", result);
      setError('')
      props.onAddHandler(data)
    } catch (error) {
      console.log("error", error.toString());
      setError(error.toString())

    }



  }

  return (
    <div>
      <span style={{ backgroundColor: 'red', color: 'white' }}>{error}</span> <br />
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
      <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
      <input onChange={(e) => setRollNo(e.target.value)} type="text" placeholder="Enter Roll No" />
      <button onClick={onClickHandler} style={{ backgroundColor: "gray" }}>Add Student</button>
    </div>
  )
}