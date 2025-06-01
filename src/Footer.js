



function Footer() {

  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 5;

  return (
    <div className="footer">
      <h1>{new Date().toLocaleTimeString()} we are currently {(hour >= openHour || hour <= closeHour )? 'open' :'close'}</h1>
      {hour >= openHour || hour <= closeHour ? (<button className="btn">Order</button>) :''}
    </div>
  );
}

export default Footer;