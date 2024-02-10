import { Component } from "react";


class YouTube extends Component{
    state={
        isSubscribe:false,
        buttontext:"please subscribe"
    }
    handelclick=()=>{
        this.setState({
        isSubscribe:true,
        buttontext:"Thanks for subscribing"
        })
    }
    
    
    render(){
        return(
<div>
    <button onClick={this.handelclick} >{this.state.buttontext }</button>

{
    this.state.isSubscribe 
    ?
    <h1>Wellcomeuser</h1>
    :
    <h1>Please subscribe</h1>

}
</div>
        )

    }
}
export default YouTube