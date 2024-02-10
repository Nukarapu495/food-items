// import axios from "axios";
// import { Component } from "react";


// class RemoveItems extends Component{
// constructor(){
//     super()
//     this.state={
//         products:[],
//     }
// }
// componentDidMount(){
//     axios.get("https://fakestoreapi.com/products")
//   .then(response=>{
//     console.log(response)
//     this.setState({
//         products:response.data
//     })
//   })
//        }
//        handler = (id) => {
//         this.setState((prevState) => ({
//           products: prevState.products.filter((product) => product.id !== id),
//         }));
//       };


//     render(){
//         return(
//             <>
//             <h3>Display items</h3>
//             <div className="d-flex justify-content-center flex-wrap"  >
//             {
//                 this.state.products.length>0 && this.state.products.map(element=>{
//                     return(
                                 
//                         <div class="card m-2" style={{ width: 250 }} >
//                         <img src={element.image} alt="Card image" height={200} />
//                         <div class="card-body">
//                             <h4 class="card-title">{element.title}</h4>
//                             <h3 class="card-text">Price:{element.price}</h3>
//                             <h4 class="card-title">id:{element.id}</h4>
//                            <center><button style={{background:"black",color:"red"}} onClick={this.handle} >Remove</button></center> 


//                         </div>
//                     </div>
//                     )
//                 })
//             }
//                          </div>
                         
//             </>
//         )
//     }
// }
// export default RemoveItems


import axios from "axios";
import { Component } from "react";

class RemoveItems extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      this.setState({
        products: response.data,
      });
    });
  }

  handler = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((product) => product.id !== id),
    }));
  };
  handle = () => {
    this.setState({
      products: [], 
    });
  };
  
  render() {
    return (
      <>

        <h3>Display items</h3>
        <button   style={{ background: "red", color: "black" }} onClick={this.handle}>Removeall</button>
        <div className="d-flex justify-content-center flex-wrap">
          {this.state.products.length > 0 &&
            this.state.products.map((element) => {
              return (
                <div class="card m-2" style={{ width: 250 }} key={element.id}>
                  <img src={element.image} alt="Card image" height={200} />
                  <div class="card-body">
                    <h4 class="card-title">{element.title}</h4>
                    <h3 class="card-text">Price: {element.price}</h3>
                    <h4 class="card-title">id: {element.id}</h4>
                    <center>
                      <button
                        style={{ background: "black", color: "red" }}
                        onClick={() => this.handler(element.id)}
                      >
                        Remove
                      </button>
                    </center>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default RemoveItems;
