/*eslint operator-assignment: ["error", "never"]*/

import React, {
    Component
}
from 'react';

import PropTypes from 'prop-types';
import {
    Link
}
from 'react-router';

const STATE = require('../../core/utils/State.json');

import './CatalogItem.css';
import Button from 'arui-feather/button';

class CatalogItem extends Component {

    constructor(props) {
        super(props);

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {


        let id = "Photo2";

        let addedItem = STATE.cart.find(item => item._id === id);

        if (addedItem) {
            addedItem.quantity = addedItem.quantity + 1;
        } else {
            STATE.cart.push({
                _id: id,
                quantity: 1
            });
        }
    }

    render() {
        let id = "Photo2";


        return (
             < div className = "CatalogItem" >
             < button className = "add-to-cart" onClick = {
                this.addToCart
            }
             > Купить <  / button >

             < Button className = "button button_default" onClick = {
                this.addToCart
            }
             > Купить 2 <  / Button >

             <  / div >
			 );
    }
}

CatalogItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string,
        index: PropTypes.number,
        isActive: PropTypes.bool,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        picture: PropTypes.string
    })
};

export default CatalogItem;
