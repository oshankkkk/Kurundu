import "./products.css"
import products from  "./test"
import Product from "./product";
const ProductsSection = () => {
   return (
    <div className="products-section" id="product">
      <h2 className="section-title">PRODUCTS</h2>
      <div className="products-grid">
        {products.map((product,index) => (
        <Product product={product} key={index}></Product>  
        ))}
      </div>

         </div>
  );
};

export default ProductsSection;