import React, { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    props.getProductDataHandler();
  }, []);
  return (
    <div>
      <h1>Home container</h1>
      <div className="container">
      <div className="row">
        {
            props.product.map((p,i) => {
                return <div className="cart-wrapper"  key={i}>
                    <div className="imageWrapper item">
                    <img src={p.image} />
                    </div>
                    <div className="textWrapper item">
                    <span>{p.title}</span>
                    <span>price : {p.price } $</span>
                    </div>
                    <div className="btnWrapper item">
                        <button className="mr-2"
                            onClick={() =>
                            props.addToCartHandler(p)
                            }
                        >
                            Add to cart
                        </button>
                        {

                            (props.cart.find( ({ id }) => id === p.id )) ? 
                            <button onClick={() => props.removeToCartHandler(p)} className="ml-2">
                              remove to cart
                            </button>
                         : ''
                        }
                        {/* <button onClick={() => props.removeToCartHandler(p)}>
                            remove to cart
                        </button> */}
                    </div>
                </div>
            })
        }
      </div>
      </div>
    </div>
  );
};

export default Home;
