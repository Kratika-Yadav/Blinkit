import { useEffect, useState } from "react";
import GroceryList from "./GroceryList";
import useFetch from "../custom hooks/useFetch";
import Adds from "./Adds";

// const Home = () => {
//     let[groceries , setGroceries] = useState(null);
//     let[pending , setPending] = useState(true);
//     let[error , setError] = useState(null);

//     useEffect(()=>{
//         setTimeout(()=>{
//             fetch("http://localhost:4000/groceries")
//             .then((res)=>{
//                 console.log("then");
//                 if(res.ok)
//                 {
//                     return res.json();
//                 }
//                 throw new Error("Sorry !! Invalid request")
//             })
//             .then((data)=>{ setGroceries(data);    setPending(false);})   
//             .catch((err)=>{ setError(err.message); setPending(false);})

//         } , 1000)   

//        if(localStorage.getItem("cartItems")==null)
//        {
//             localStorage.setItem("cartItems", "[]");
//             localStorage.setItem("items", "[]");
//        }
//     } , [])
    const Home = () => {
    let{data:groceries , error , pending} = useFetch("http://localhost:4000/groceries")

    return ( <div className="home-cont">

                {error && <h1>{error}</h1>}

                {pending && <div id="loader"></div>}

                {groceries && <Adds/>}

                {groceries &&  <GroceryList groceries={groceries} title="All Grocery"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="fruit")} title="Fruits"/> }
                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="vegetable")} title="Vegetable"/> }
                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="Soft drink")} title="Drinks"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="snack")} title="Snaks"/> }
                
            </div> );
} 
 
export default Home;
  