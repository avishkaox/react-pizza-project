
function Pizza({name , photoName , price , soldOut , ingredient}) {
  // console.log(props);
  return (
    <li className={`pizza  ${soldOut?'disable':'enabled'}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>${price}</span>
        {soldOut?(<p>Sold Out</p>) : ''}
      </div>
    </li>
  );
}

export default Pizza;
