
function Pizza(props) {
  // console.log(props);
  return (
    <li className={`pizza  ${props.soldOut?'disable':'enabled'}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>${props.price}</span>
        {props.soldOut?(<p>Sold Out</p>) : ''}
      </div>
    </li>
  );
}

export default Pizza;
