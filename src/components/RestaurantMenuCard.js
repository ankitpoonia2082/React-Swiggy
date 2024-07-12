// Restaurant Menu card

const MenuCard = () => {


  return (
    <div className="restauarantMenuCard">
      <div className="menuDetail">
        <h1>🟢</h1>
        <h1>Name</h1>
        <div className="itemPrice">
          <h2>₹ 150</h2>
          <h4>🔸 60% OFF USE SWIGGYIT</h4>
          <h3>⭐️ 4.5(30)</h3>
        </div>
        <p>A fusion that combines elements from Indian and Mexican cuisines, resulting in a flavorful and unique combination</p>
      </div>
      <div className="menuImage">
        <h1>Image</h1>
        <button>ADD</button>
      </div>
    </div>
  );
};

export default MenuCard;