import { Component } from "react";


class Update extends Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
        
        }
  
    handleClick=()=>{
        this.setState({
count:this.state.count+1,
        })
    }
  shouldComponentUpdate(){
        // return false;
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState)
    }
    componentDidUpdate(){
        document.title=`krishna ${this.state.count}`
    }
    componentDidMount(){
        document.title=`krishna ${this.state.count}`   
    }

    render(){
        return(
            <>
            <h2>Update</h2>
            <center>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>increment</button>
            </center>
            </>
        )
        }

   
}
export default Update