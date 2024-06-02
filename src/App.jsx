import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Home} from './Components/Home'
import { Login } from './Components/Login'
import { Products } from './Components/Products'
import { Logout } from './Components/Logout'


function App() {
  
  let data= [
    {
      "id": 8,
      "brand": "roadster",
      "title": "Men Linen Regular Fit",
      "image": "https://picsum.photos/200",
      "category": "men",
      "price": 599
    },
    {
      "id": 2,
      "brand": "blackberrys",
      "title": "Regukar Fit Printed Shirt",
      "image": "https://picsum.photos/200",
      "category": "men",
      "price": 699
    },
    {
      "id": 9,
      "brand": "twills",
      "title": "Men Linen Regular Fit",
      "image": "https://picsum.photos/200",
      "category": "men",
      "price": 799
    },
    {
      "id": 1,
      "brand": "roadster",
      "title": "cotton Checked Casual Shirt",
      "image": "https://picsum.photos/200",
      "category": "men",
      "price": 844
    },
    {
      "id": 6,
      "brand": "allen-solly",
      "title": "Checked Regular Fit Printed Shirt",
      "image": "https://picsum.photos/200",
      "category": "men",
      "price": 999
    }
  ]
  console.log(data)
  
  
  return (
    <>
      <div className='conatiner'>
       <Home/>
       <Login/>
       <Logout/>
       <Products/>
     
      </div>
      
      
    </>
  )
}

export default App
