import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Navbar2 from "./component/Navbar2"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from "./component/Login";
import Help from "./component/Help";
import LandingPage from "./component/LandingPage";
import SignUp from "./component/SignUp";
import ProductDisplay from "./component/ProductDisplay";
import MyCart from "./component/MyCart";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/help" component={Help} />
        <Route path="/product/:product_id" component={ProductDisplay} />
        <Route path="/myCart" component={MyCart} />
        <Route path="/" component={LandingPage} />        
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
