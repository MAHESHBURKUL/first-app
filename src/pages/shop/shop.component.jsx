import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollectionComponent from "../../components/previewcollectioncomponent/preview-collection.component";
class ShopPage extends React.Component {

    constructor (props) {

        super (props);
        this.state = {

            Collection : SHOP_DATA
             
              
        };
    }

    render() {
       const {Collection} = this.state;
        return (<div className="shop-page">
        {Collection.map(({id, ...otherCollectionProps}) => (
          <PreviewCollectionComponent key={id} {...otherCollectionProps}/>


        ))}
        
        </div>)
    }
};
export default ShopPage;