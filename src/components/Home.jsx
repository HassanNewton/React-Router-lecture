import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

function Home() {
  const [products, setProducts] = useState([]);

  // Använder custom hook useFetch
  //   const { data: products, loading, error } = useFetch("/api/products");

  //   if (loading) return <p>Laddar produkter...</p>;
  //   if (error) return <p>Något gick fel: {error.message}</p>;

  useEffect(() => {
    fetch("http://localhost:3001/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Välkommen!</h2>
      <p>Välj en produkt:</p>
      <div className="product-list">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
