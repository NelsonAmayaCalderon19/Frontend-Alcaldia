import React from 'react'
import Cards from './components/Cards'
import CardEvento from './components/CardEvento'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";



export default function App() {
  return (
    <div className="App">   
      <Cards/>
      <hr></hr>
      <CardEvento/>

    </div>
  )
}

