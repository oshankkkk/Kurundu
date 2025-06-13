import "./products.css"
import products from  "./products.json"
import Product from "./product";
const ProductsSection = () => {
   return (
    <div className="products-section">
      <h2 className="section-title">PRODUCTS</h2>
      <div className="products-grid">
        {products.map((product) => (
        <Product product={product}></Product>  
        ))}
      </div>

         </div>
  );
};

export default ProductsSection;