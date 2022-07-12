
import "./home.styles.css"
import { useState } from "react"

import React from 'react'

function Home() {
 const [value , setValue] = useState("")


  return (<div className="container">

  
  


    <form   className="">
        <input 
        value={value}
        placeholder="Add Todo"
        onChange={(e)=>setValue(e.target.value)}
        
        />
    </form>
    <div className="dev">
        <h5>TODO 1</h5>
    </div>
    <div className="dev" >
        <h5>TODO 2</h5>
    </div>
    <div className="dev" >
        <h5>TODO 3</h5>
    </div>
  </div>
    
  )
}

export default Home