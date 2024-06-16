import "./Card.css"
export default function Card(props){
    return(
       <div  className="car-card">
              <img src={props.image} className="car-image"/>
              <h1  className="">{props.title}</h1>
              <p className="car-description">{props.description}</p>
              <h3 className="car-price">{props.price}</h3>
       </div>
    );
};