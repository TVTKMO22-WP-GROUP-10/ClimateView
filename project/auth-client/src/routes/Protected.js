import React from 'react'
import axios from 'axios'

export default function Protected() {

  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    withCredentials: true
  }

  axios.get('http://localhost:8080/private', config)
    .then(response => console.log(response.data))
    
    .catch(e => console.log(e.message))
  return (
    <div>
      Here will be protected info for the User
    </div>
  )
}
