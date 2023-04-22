import React from 'react'

export default function Protected() {

  let testi = localStorage.getItem('token');
  console.log(testi);

  return (
    <div>Here will be protected info for the user</div>
  )
}
