import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor () {
    super()
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' ,
                id: 2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 21,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
}

handleIncreaseQuantity = (product) => {
    // console.log('Hey increase the qty of this',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        products
    })
}

handleDecreaseQuantity = (product) => {

    const {qty} = product;

    if(qty === 0){
        return;
    }

    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;

    this.setState({
        products
    })
}

handleDeleteItem = (id) => {
    const {products} = this.state;
    const items = products.filter((product) => {
        return product.id !== id
    });

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;

   let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  const {products} = this.state;

   let cost = 0;

  products.forEach((product) => {
    cost += product.qty*product.price;
  })

  return cost;
}

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar
        count={this.getCartCount()}
        />
       <h1>Cart</h1>
       <Cart
       products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteItem={this.handleDeleteItem}
       />
       <div style={{padding:10 , fontSize: 20}} >TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
