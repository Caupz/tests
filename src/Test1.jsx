import React from "react";
import PropTypes from "prop-types";
import test1Example from "./test1_example.png";

// eslint-disable-next-line
const ITEMS = [
  {
    name: "Galaxy S10+",
    price: 1000,
  },
  {
    name: "iPhone 11 Pro",
    price: 1200,
  },
  {
    name: "huawei p20 pro",
    price: 900,
  }
];

function getTotalSum() {
  let sum = 0;

  for(let i = 0; i < ITEMS.length; i++) {
    sum += ITEMS[i].price;
  }
  return sum;
}

const Test1 = () => {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 1:
        <p>
          Lehel tuleb kuvada kõik tooted muutujas <code>ITEMS</code>.
          Iga toote kohta peab olema nimi ja hind.
          Iga toode peab olema uuel real.
        </p>
        <div>Näiteks:</div>
        <img style={{width: 200}} src={test1Example}/>
      </div>
      <div>
          {
              ITEMS.map( item => {
                  return <Item
                      key={"product-"+item.name}
                      price={item.price}
                      name={item.name}
                  />;
              })
          }
      </div>
      <div><span className={"bold"}>Summa kokku:</span> {getTotalSum()}</div>
    </div>
  );
};

const Item = (props) => {
    return(
        <div  className="product">
            <span className="product-title">{props.name}</span> &nbsp;
            <span className="product-cost">${props.price}</span>
        </div>
    );
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default Test1;
