// import React from "react";

const Product = ({ data }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {
      data.map((element) => (
        <div className="card m-2" style={{ width: 200 }} key={element.id}>
          <img src={element.image} alt="Card image" height={150} />
          <div className="card-body">
            <h2 className="card-title" style={{ fontSize: '1rem' }}>{element.MovieName}</h2>
            <div style={{ marginBottom: '30px' }}>
              <audio controls style={{ width: '100%' }}>
                <source src={element.Song} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
