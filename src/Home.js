
import "./home.styles.css"
import { useState } from "react"
import {Link} from "react-router-dom"

import React from 'react'

function Home() {
 const [value , setValue] = useState(0)

 const inc = ()=>{
    setValue(value + 1)
 }
 const dec = ()=>{
    setValue(value - 1)
 }
  return (<div className="container">
   
    <div className="dev" >
        <button onClick={inc}>
            +
        </button>
        <h1>
            {value}
        </h1>
        <button onClick={dec}>
            -
        </button>
        <Link to={"/check"}> CheckOut Page</Link>

    </div>
  </div>
    
  )
}

export default Home