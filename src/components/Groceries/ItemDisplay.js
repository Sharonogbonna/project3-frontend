export default function  ItemDisplay (props) {
    //The component must return some JSX
      //function to return loaded JSX
    return (
      <div className="item-card">
        <h1>{props.item}</h1>
        <h3>From: {props.store}</h3>
        <h3>Brand: {props.brand}</h3>
        <h3>Units: {props.units}</h3>
        <h3>Quantity: {props.quantity}</h3>
        Purchased? <input type='checkbox' name='checkbox'></input>
      </div>
    );
  };