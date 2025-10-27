import React from "react";

class Component2 extends React.Component {
  products = [
    { id: 1, name: "mobile" },
    { id: 2, name: "phone" }
  ];

  render() {
    return (
      <div>
        <ol>
          {
            this.products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default Component2;
