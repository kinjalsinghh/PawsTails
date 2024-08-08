
import { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

function CartItems() {
    const { TotalCartAmount, all_product, cartItems, removeFromCart, cartType } = useContext(ShopContext);
    const navigate=useNavigate()
    const renderCartItem = (e, priceFactor) => {
        const quantity = cartItems[e.id] || 0;
        const itemTotal = priceFactor * e.new_price * quantity;
        return (
            <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className='carticon-product-icon' alt={`${e.name}`} />
                    <p>{e.name}</p>
                    <p>INR {priceFactor * e.new_price}</p>
                    <button className='cartitems-quantity'>{quantity}</button>
                    <p>INR {itemTotal}</p>
                    <img className="cartitems-remove-icon" src={remove_icon} alt="Remove" onClick={() => removeFromCart(e.id)} />
                </div>
                <hr />
            </div>
        );
    };

    return (
        <div className='cartitems'>
            <h1>My Cart</h1>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map(e => {
                    if (cartItems[e.id] > 0) {
                        console.log(cartItems);
                        console.log("cartType", cartType);

                        // Ensure cartType[e.id] is defined
                        const cartItemType = cartType[e.id] || 'large';  // Default to 'large' if cartType is undefined

                        switch (cartItemType) {
                            case 'small':
                                return renderCartItem(e, 0.5);
                            case 'medium':
                                return renderCartItem(e, 0.75);
                            case 'large':
                                return renderCartItem(e, 1);
                            default:
                                console.error(`Unknown cart type: ${cartItemType}`);
                                return null;
                        }
                    }
                    return null;
                })
            }
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h2>Cart Totals</h2>
                    <div className='cartitems-pricing'>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>INR {TotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>INR {TotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>Proceed</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;

