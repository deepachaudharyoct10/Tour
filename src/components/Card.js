import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
    const [readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    // function removeTour() {

    // }
    return (
       
<div className="card">
        <img src={image} className="image" alt=""></img>
        <div className="tour-info">
        <div className="tour-details">
            <h4 className="tour-price">₹{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">{description}
        <span onClick={readmoreHandler} className="read more">{readmore ? 'show less': 'read more'}</span></div>
        </div>
        <button className="btn-green">Intersted</button>
        <button onClick={ () => removeTour(id)} className="btn-red">NOt Interested</button>
</div>


    );
}
export default Card;