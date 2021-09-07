import {connect} from "react-redux"
import Header from "../components/Header";

const mapStateToProp = state => ({
    cart:state.cartItems.cartData
})

const mapDispatchToProps = dispatch => ({
   
})

export default connect(mapStateToProp,mapDispatchToProps)(Header)
// export default Home;