import React,
{
    Component
} from 'react';


import CatalogItem from '../components/CatalogItem/CatalogItem';





const STATE = require('../State.json');

const products = STATE.products;



class CatalogItemPage extends Component {


    componentDidMount() {

        let itemId = this.props.params.itemId;

        let item = products.find(product => product._id === itemId);


        this.setState({ item: item });

    }


    render() {


        return (

            <div className="CatalogItemPage">

                <h3>12345-{this.state.item.name}</h3>

                <CatalogItem item={this.state.item} />

            </div>

        );

    }

}




export default CatalogItemPage;
