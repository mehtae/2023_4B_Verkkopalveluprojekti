import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
