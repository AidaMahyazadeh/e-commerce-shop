import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './card-icon.styles.scss';

function CardIcon(){
    const{isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    function toggleIsCartOpen(){
        setIsCartOpen(!isCartOpen)
    }

return(
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
)
}

export default CardIcon;