import {connect} from "react-redux"
import Home from "../components/Home";
import {addToCart, fetchProduct, removeFromCart} from "./../service/action/action"

const mapStateToProp = state => ({
    cart:state.cartItems.cartData,
    product:state.products.product
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data)),
    removeToCartHandler:data => dispatch(removeFromCart(data)),
    getProductDataHandler:() => dispatch(fetchProduct()),
})


export default connect(mapStateToProp,mapDispatchToProps)(Home)
// export default Home;