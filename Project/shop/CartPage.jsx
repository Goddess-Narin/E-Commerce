import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png';
import CheckoutPage from './CheckoutPage';

const CartPage = () => {
    const[cartItems, setcartItems] = useState([]);

    useEffect(() => {
        //Fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);
    }, [])

    //Calculate Prices 
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    //Handle quantity Increase
    const handleIncrease  =(item) => {
        item,quantity += 1;
        setcartItems([...cartItems]);
        
        //update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    //Handle quantity Decrease
    const handleDecreas = (item) => {
        if(item.quantity >1){
            item.quantity -= 1;
            setcartItems9([...cartItems]);

            //update local storage with new cart items
            localStorage.setItem("cart",JSON.stringify(cartItems))
        }
    }

    //Handle item remove
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);

        //update new cart
        setcartItems(updatedCart);

        updateLocalStorage(updatedCart);
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    //Cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) =>{
        return total + calculateTotalPrice(item);
    }, 0)

    const orderTotal = cartSubtotal;
  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage= {"Cart Page"} />
      <div className='shop-cart padding-tb'>
        <div className='container'>
            <div className='section-wrapper'>
                {/* Cart Top Section */}
                <div className='cart-top'>
                    <table>
                        <thead>
                            <tr>
                                <th className='cat-product'>Product</th>
                                <th className='cat-price'>Price</th>
                                <th className='cat-quantity'>Quantity</th>
                                <th className='cat-toprice'>Total</th>
                                <th className='cat-edit'>Edit</th>
                            </tr>
                        </thead>

                        {/* Table Body Section */}
                        <tbody>
                            {
                                cartItems.map((item, indx) => (
                                    <tr key={indx}>
                                        <td className='product-item cat-product'>
                                            <td className='p-thumb'>
                                                <Link to={`/shop`}><img src={item.img} alt="" /></Link>
                                            </td>
                                        </td>

                                        <td className='cat-price'>${item.price}</td>
                                        <td className='cat-quantity'>
                                            <div className='cart-plus-minus'>
                                                <div className='dec qtybutton' onClick={() => handleDecreas(item)}>-</div>
                                                <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity}/>
                                                <div className='inc qtybuttpn' onClick={() => handleIncrease(item)}>+</div>
                                            </div>
                                        </td>
                                        <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                        <td className='cart-edit'>
                                            <a href='#' onClick={() => handleRemoveItem(item)}>
                                                <img src={delImgUrl} alt="" />
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* Cart top Ending */}
                <div className='cart-bottom'>
                    {/*checkout box*/}
                    <div className='cart-checkout-box'>
                        <form className='coupon'>
                            <input className='cart-page-input-text' type="text"  name='coupon' id='coupon' placeholder='Coupon Code ...'/>
                            <input type="submit" value={"Apply Coupon"} />
                        </form>

                        <form className='cart-checkout'>
                            <input type="submit" value="Update Cart"/>
                            <div>
                                <CheckoutPage/>
                            </div>
                        </form>
                    </div>

                    {/* Shopping Box */}
                    <div className='shiping-box'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='calculate-shiping'>
                                    <h3>Calculate Shipping</h3>
                                    <div className='outline-select'>
                                        <select>
                                            <option value="uk">United Kingdom</option>
                                            <option value="Kh">Cambodia</option>
                                            <option value="ph">Philipine</option>
                                            <option value="th">Thailand</option>
                                            <option value="kr">Korea</option>
                                        </select>
                                        <span className='select-icon'>
                                            <i className='icofont-rounded-down'></i>
                                        </span>
                                    </div>

                                    <div className='outline-select shipping-select'>
                                    <select>
                                            <option value="uk">New York</option>
                                            <option value="Kh">Pnhom Penh</option>
                                            <option value="ph">Manila</option>
                                            <option value="th">Bangkok</option>
                                            <option value="kr">Souel</option>
                                        </select>
                                        <span className='select-icon'>
                                            <i className='icofont-rounded-down'></i>
                                        </span>
                                    </div>
                                    <input type="text" name='postalCode' id='postalCode' placeholder='Postercode/ZIP*'
                                    className='cart-page-input-text' />
                                    <button type='submit'>Update Address</button>
                                </div>
                            </div>

                            <div className='col-md-6 col-12'>
                                <div className='cart-overview'>
                                    <h3>Cart Totals</h3>
                                    <ul className='lab-ul'>
                                        <li>
                                            <span className='pull-left'>Cart Subtotal</span>
                                            <p className='pull-right'>${cartSubtotal}</p>
                                        </li>
                                        <li>
                                            <span className='pull-left'>Shipping and Handling</span>
                                            <p className='pull-right'>Free Shipping</p>
                                        </li>
                                        <li>
                                            <span className='pull-left'>Order Total</span>
                                            <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
