import React, {Component} from "react";
import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './App.css';
import axios from "axios";
import Cards from './components/Cards'
import "bootstrap/dist/css/bootstrap.min.css";

const url="https://jsonplaceholder.typicode.com/photos";

export default function App() {

  return (
    
    <div className="App">     
      <Cards/>
    </div>
  )

}
