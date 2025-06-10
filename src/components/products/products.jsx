import "./products.css"
import products from  "./products.json"
const ProductsSection = () => {

   return (
    <div className="products-section">
      <h2 className="section-title">PRODUCTS</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{backgroundColor: product.bgColor}}>
            <div className="product-image-placeholder">
              {console.log(product.imageURL)}
            {/* <img className="product-img" src={cinnOil} alt="img" /> */}
            <img className="product-img" src={product.imageURL} alt="img" />

            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button className="add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

         </div>
  );
};

export default ProductsSection;