import { Component } from "react";
import axios from 'axios';
// import Loader from "react-loader-spinner"; 
class MountingPhase extends Component{
    constructor(){
        super()
        this.state={
            message:"hello",
            products:[]
        }
    }

    

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
        //     console.log(response);
        //     this.setState({
        //         products:response.data,
        //     })
        // })
       if(response.status===200){
        this.setState({
            products:response.data,
        },()=>{
            console.log(this.state.products)
        });
       }
       else if(response.status===404){
        alert("resource is not found please check the url and try again later");
       }
       else{
        alert("something went worng.please again later")
       }
        })
        .catch(error=>{
            console.log("Error ocurred:",error);
            alert("An error occured please try again later")
        })
    }
    render(){
        return(
            <>
            <h2>MountingPhase</h2>
            {/* <Child color={"yellow"}/> */}
            {
                this.state.products.length>0
                ?
                <Products products={this.state.products}/> 
                :
                <Loader/>
            }
            

            </>
        )
    }
}
export default MountingPhase


class Loader extends Component{
render(){
    return(
        <>
        <h3>Loading Please waitt..</h3>
        {/* <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/> */}
        </>
    )
}
}
class Products extends Component{
    render(){
        return(
            <>
            <h1>Products</h1>
            {
                this.props.products.map(element=>{
                    return(
                    <h2>{element.title}</h2>
                
                    )
                })
            }
            </>
        )
    }
}

class Child extends Component{
    constructor(){
        super()
        this.state={
            color:"red",
        }
    }
    static getDerivedStateFromProps(props){
        return {color:props.color};
    }
render(){
    return(
        <>
        <h2 style={{color:this.state.color}}>child{this.state.color}</h2>
        </>
    )
}
   
}