
import "./home.styles.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"

import React from 'react'

function CounterRedux() {
 const add = useSelector()
  
  return (<div className="container">
   
    <div className="dev" >
        <button >
            +
        </button>
        <h1>
            
        </h1>
        <button >
            -
        </button>
        <Link to={"/check"}> CheckOut Page</Link>

    </div>
  </div>
    
  )
}

export default CounterRedux