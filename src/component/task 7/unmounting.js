import { Component } from "react";




class UnMount extends Component{
    constructor(){
        super()
        this.state={
            isVisabileChild:false,
        }
    }
 

        handleClick=()=>{
            this.setState(
                {
                    isVisabileChild:!this.state.isVisabileChild
                }
            )
        }



    render(){
        return(
            <>
            <h3>unmount</h3>
            {
                this.state.isVisabileChild ?  <Child/>:<h3>no child</h3>

            }
            <button onClick={this.handleClick}>Click here to remove</button>
          
            </>
        )
    }
}
export default UnMount

    class Child extends Component{
        componentWillUnmount(){ //while liveing the component to clean up...
            alert("child will remove")
        }
render(){
return(
    <>
    <h2>child</h2>
    </>
)
}
    }
