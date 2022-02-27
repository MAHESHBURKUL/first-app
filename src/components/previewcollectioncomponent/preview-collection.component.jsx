import React from "react";
import menuItemComponent from "../menu-item/menu-item.component";
import './preview-collection.component.style.scss';
import CollectionItems from "../collection-items/collection-item.component";
const PreviewCollectionComponent = ({title, items}) => (
 <div className="collection-preview">
 <h1 className="title">{title.toUpperCase()}</h1>

 <div className="preview">
  {
      items.filter((item, idx) => idx<4).map(({id, ...otherItemsProps}) =>(
         <CollectionItems key={id} {...otherItemsProps} />

      ))


  }
 </div>
 </div>

);
export default PreviewCollectionComponent;