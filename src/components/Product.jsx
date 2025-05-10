import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

// Visar en enskild produkt baserat på URL-parametern
function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Använder custom hook useFetch
  //  const { productId } = useParams();
  //  const {
  //    data: product,
  //    loading,
  //    error,
  //  } = useFetch(`/api/products/${productId}`);

  // if (loading) return <p>Laddar produkt...</p>;
  // if (error) return <p>Fel vid hämtning: {error.message}</p>;
  // if (!product) return <p>Ingen produkt hittades.</p>;

  useEffect(() => {
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <div>Laddar...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default Product;
