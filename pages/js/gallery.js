import React, { useEffect, useState } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import "../css/galerey.css"

  export default function gallery() {
    const [images,setImages]=useState([])
  
  
    useEffect(()=>{
      var a=JSON.parse(localStorage.getItem('oneproduct')).image
      var b=[]
      a.map(item=>{
        b.push({src:item.image})
      })
      if(images.length===0){
        setImages(b)
      }
      console.log(images);

    })
     
    return (
      <div className="avtomobilrasm">
        <Carousel images={images} style={{ height: '90vh', width: '100%' }} />
        </div>
    )
    }
  
