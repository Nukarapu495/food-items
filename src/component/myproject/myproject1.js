import React,{useState} from "react"
import Product from "./products1"
const Recipe=()=>{
    const[search,setSearch]=useState('')
    const[data,setData]=useState([])
    console.log(data);

    const YOUR_APP_ID ="f18f9358";
    const YOUR_APP_KEY ="5c2e28cb598cb81e484a580d0ce0519d";

    const sumbitHandler=e=>{
        e.preventDefault();
        console.log(search)
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&calories=591-722&health=alcohol-free`).then(
            response=>response.json()
        ).then(
          data=>setData(data.hits)
            // data=>console.log(data)
       
           
        )

    }
   

return(
    <>
   <center>
    <h1>Food items Display</h1>
    <form onSubmit={sumbitHandler}>
        <img src="https://lh3.googleusercontent.com/p/AF1QipOMlL_Cr5XJxfFHG8W8AwNrgUBEtBSkqVKN54oT=w768-h768-n-o-v1" width="400px" height="400px" style={{margin:20,}}/>
        <img src="https://img.freepik.com/premium-psd/menu-vegetarian-food-is-open-page-that-says-vegetarian-food_25996-2067.jpg" width="400px" height="400px" /><br/>
    <input type="text"  value={search} placeholder="veg/non veg" onChange={(e)=>setSearch(e.target.value)}/><br/><br/>
    <input type="submit" className="btn btn-primary" value="search"/><br/>
    { data.length>1 ?<Product data={data}/> : null
}
    </form>
    </center>
    </>
)
}
export default Recipe