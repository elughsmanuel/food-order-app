import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/card-context';

const HeaderCartButton = (props) => {
    const cardCtx = useContext(CartContext);

    const numberOfCartItems = cardCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return ( 
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
     );
};
 
export default HeaderCartButton;