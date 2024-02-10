


import React from "react";

const Product = ({ data }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {data.map((element) => (
        <div className="card m-2" style={{ width: 250 }} key={element.recipe.uri}>
          <img src={element.recipe.image} alt="Card image" height={200} />
          <div className="card-body">
            <h2 className="card-title">{element.recipe.label}</h2>
            <h4 className="card-title">Total calories: {Math.round(element.recipe.calories)}</h4>
            <center><button style={{backgroundColor:"red",color:"black"}}>BUY</button></center>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
