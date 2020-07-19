import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Plate from 'arui-feather/plate';
import CartItem from '../../../components/CartItem/CartItem.js';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import Footer from '../../../components/Common/Footer';
import { checkoutBreadcrumbs } from '../../../core/utils/testData';

import './styles.scss';

const STATE = require('../../../core/utils/State.json');

class CartPage extends Component {
  constructor(props)
 {
    super(props);
    this.state = {
      totalPrice: 0
    };
    this.setItemQuantity = this.setItemQuantity.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.cartItems = STATE.cart.map(cartItem => {
      let product = STATE.products.find(productItem => cartItem._id === productItem._id);
      if (product) {
        cartItem.name = product.name;
        cartItem.price = product.price;
      }
      return cartItem;
    });
    this.cartItemsComponents = this.cartItems.map(cartItem => {
      return (

        <CartItem
          setItemQuantity={this.setItemQuantity}
          item={cartItem}
          key={cartItem._id}
	  />)
    });
 }
  componentDidMount()
 {
    this.setTotalPrice();
 }
  setTotalPrice()
 {
    let totalPrice = 0;
    this.cartItems.forEach(item =>
 {
      totalPrice += (item.price * item.quantity);
 });
    this.setState({
      totalPrice: totalPrice
    });
 }
  setItemQuantity(id, quantity)
 {
    let item = this.cartItems.find(item => item._id === id);
    item.quantity = quantity;
    this.setTotalPrice();
    // Update state
    STATE.cart = this.cartItems;
 }
  submitOrder()
 {
	    browserRouter.push('/checkout');
  }
  render()
 {
    return (
	    <>
		
		<Helmet>
			<title>Море-Корзина</title>
			<meta name="description" content="Море"/>
			<meta name="keywords" content="Море"/>
		</Helmet>		
		<section className="section breadcrumbs">
			<Breadcrumbs items={checkoutBreadcrumbs}/>
		</section>
    <section className="section">
        <div className="">
            <GridRow>
					<GridCol width={{ mobile: 12, tablet: 12, desktop: 12}}>
						<div className="teacher-about">
							<h2>Товары в корзине</h2>

						</div>
					</GridCol>
			</GridRow>
        </div>
	<Plate className="teacher-block">
								<div className="main-sections-description-text">
							Знакомство с юридическими условиями и политиками торговой площадки «Море» xsskjfksjflsjf ld123 kajfalj flajfla
							</div>
							<hr />
							
    <div className="">
		<GridRow>
			<GridCol className="main-sections-heading-name" width={{ mobile: 12, tablet: 4, desktop:2}}>
			Название
			</GridCol>
			<GridCol className="main-sections-heading-price" width={{ mobile: 12, tablet: 4, desktop:2 }}>
			Цена
			</GridCol>
			<GridCol className="main-sections-heading-quantity" width={{ mobile: 12, tablet: 4, desktop:2}}>
			Количество
			</GridCol>
			<GridCol className="main-sections-heading" width={{ mobile: 12, tablet: 4, desktop:2 }}>
			Итого
			</GridCol>			
		</GridRow>
		<GridRow className="main-sections-heading" style={{ textAlign: 'right' }}>
	        Всего на сумму:{" "}
			<span className="total">{this.state.totalPrice}{' '}руб.</span><br />			
		</GridRow>
		
		{/**
				{this.cartItemsComponents}
	*/}




			<GridRow>
				<GridCol width={{ mobile: 12, tablet: 9 }}>
				<NavLink className="link link_third" to="/checkout">

				<div className="button-center m-t30" style={{ textAlign: 'center' }}>
					<Button className="button button_settings-form" type='submit' onClick={this.submitOrder}>Оформить</Button>
					{/** 
					<button type='submit' onClick={this.submitOrder} className="button button_settings-form">№2 Оформить--Заказ submit</button>
					*/}
				</div>
				</NavLink>
				</GridCol>
			</GridRow>
		  {/*  
					<Button className="button button_default" >Отзывы о товаре</Button>
        <button onClick={this.submitOrder} className="button button_default">
          // className="order">		
	          Оформить--Заказ
        </button>
		  */}
          {this.props.children}
    </div>
	</Plate>
    </section> 	
	<Footer/>
	 </>
    );
  }
}

export default CartPage;
