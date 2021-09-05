import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TinderCards from 'react-tinder-card'
import instance from './API'
import { fetchAdd, selectadd } from './redux/addSlice'

import "./TinderCard.css"
export default function TinderCard() {
    const [people,setPeople]=useState([])
    const display=useSelector(selectadd)
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchData= async ()=>{
         const fetchBody=await instance.get("/main/tinder/cards");
         setPeople(fetchBody.data);
      
        }
fetchData();        
    },[])
const swiped=(direction,nameToDelete)=>{
    console.log("removing:",nameToDelete);
    // setLastDirection(direction);
}
const outOfFrame=(name)=>{
    console.log(name,"left the screen")
}

    return (
        <div className="tinder__cards" >
            <div className="tinder__cards__container">
                {
                    display.add.name==='old' ?
                    (
                        <>
                           {
                people.map((person)=>(
                    <TinderCards
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}

                    >
                    <div style={{backgroundImage:`url(${person.imgUrl})`}} className="card" >
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCards>
                ))
            }
                        </>
                    ):
                    (
                        <>
                                   {
                people.map((person)=>(
                    <TinderCards
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}

                    >
                    <div style={{backgroundImage:`url(${person.imgUrl})`}} className="card" >
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCards>
                ))
                                   }
                        </>
                    )
                }
            
            </div>
           
        </div>
    )
}
