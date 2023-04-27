import React, { useState } from 'react'
import axios from 'axios'

export default function Protected() {

  const [userData, setUserData] = useState()

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    withCredentials: true
  }

  const loadData = async () => {
    try {
      const result = await axios.get('http://localhost:8080/private', config)
      console.log(result);
      setUserData(result.data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={loadData}>Click to load protected data for your user</button>
      <p>{userData}</p>
    </div>
  )
}
