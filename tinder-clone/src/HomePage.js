import React, { useState } from 'react'
import {Card,CardContent} from "@material-ui/core"
import {NavLink, Redirect, useHistory} from "react-router-dom"
import "./TinderCard.css"
import App from './App';
import { useDispatch } from 'react-redux'
import { fetchAdd } from './redux/addSlice'
import Header from './Header';
import { addCard } from './API';
export default function HomePage() {
    const history=useHistory()
const [name,setName]=useState('')
const [img,setImg]=useState('')
const dispatch=useDispatch();


const addInfo= async()=>{
   
dispatch(fetchAdd({
    name:name,
    imgUrl:img,
    display:true   
}));
await addCard({
    "name":name,
    "imgUrl":`${img}`
});

 
    




}
    return (
        <div>
                <Header/>
            
             <div className="tinder__cards" >
            <div className="tinder__cards__container">
            <Card className="card">
                <CardContent style={{display:'flex'}} className="form" >
               
                    <div style={{display:'flex',flexDirection:'column',padding:20}}>
                        <div>
                        <label htmlFor="name" >Name:</label>
                        </div>
                        <div>
                       
                        <label htmlFor="imgUrl" >ImgUrl:</label>
                        </div>
                      
                    
                    </div>
                      <div  style={{display:'flex',flexDirection:'column',padding:20}}>
                          <div>
                     
                          <input required name="name" value={name} onChange={e=>setName(e.target.value)} />
                          </div>
                          <div>
                       
                          <input required name="imgUrl" value={img} onChange={e=>setImg(e.target.value)}/>
                          </div>
                     
                      
                     
                    </div>
                     
                        

                      
                        <NavLink onClick={addInfo} exact to="/main" >
                     Start Swiping
                    </NavLink>
               
                    
                </CardContent>
            </Card>
            </div>
           
        </div>
        
        </div>
    )
}
