import axios from "axios";
import { Component } from "react";



class Product extends Component {
    state = {
        array: []
    }

    handleClick = () => {
        // fetch("https://fakestoreapi.com/products")
        // .then(response=>response.json())
        // .then(response=>console.log(response))

        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                console.log(response)
                this.setState(
                    {
                        array: response.data
                    }
                )
            })
    }


    render() {
        console.log(this.state.array, "array")
        return (
            <>
                <h2>Products</h2>
                <button onClick={this.handleClick}>seeproduct</button>
                <div class="ravi">
                    <div className="d-flex justify-content-center flex-wrap"  >
                        {
                            this.state.array.length > 0 && this.state.array.map((element) => {
                                return (

                                 
                                    <div class="card m-2" style={{ width: 250 }}>
                                        <img src={element.image} alt="Card image" height={200} />
                                        <div class="card-body">
                                            <h4 class="card-title">{element.title}</h4>
                                            <h3 class="card-text">Price:{element.price}</h3>


                                        </div>
                                    </div>
                               

                                )

                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Product

