import { Fragment,useContext } from "react";
import { Outlet, Link} from "react-router-dom";
import CardIcon from "../../components/card-icon/card-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { userContext } from "../../contexts/user.context";
import {CartContext} from '../../contexts/cart.context';
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

function Navigation(){
  const{currentUser}=useContext(userContext);
  const {isCartOpen}= useContext(CartContext)
 

return (
   <Fragment>
     <div className="navigation">
        <Link className="logo-container" to='/'>
      <CrwnLogo className="logo" />
        </Link>
      <div className="nav-links-container">
       <Link className="nav-link" to='/shop'>
        SHOP
       </Link>
       {currentUser ?( <span className="nav-link" onClick={signOutUser}>Sign out</span>) :  (<Link className="nav-link" to='/auth'>
        SIGN IN
       </Link>)}
      <CardIcon />
      </div>
      {isCartOpen && <CartDropdown />}
     </div>
     <Outlet />
   </Fragment>
)
}
 export default Navigation;