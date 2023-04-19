import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${props.match.params.id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [props.match.params.id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
