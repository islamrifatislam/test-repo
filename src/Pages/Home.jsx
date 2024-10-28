import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import Players from '../Components/Players'
import Footer from '../Components/Footer'


export default function Home() {
const [clamCoin,setClemCoin] = useState();
const [selectedPlayer,setSelectedPlayer] = useState([]);
return (
<div className='container mx-auto'>
         <NavBar clamCoin={clamCoin}/>  
         <Banner setClemCoin={setClemCoin}/>   
         <Players clamCoin={clamCoin} setClemCoin={setClemCoin}  setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}/>   
         <Footer/>                     
</div>
 )
}
