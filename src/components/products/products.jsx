import "./products.css"
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Cinnamon Powder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rs. 600/-",
      bgColor: "#8B7355"
    },
    {
      id: 2,
      name: "C5 Cinnamon",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rs. 1300/-",
      bgColor: "#A0916B"
    },
    {
      id: 3,
      name: "Cinnamon Powder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "Rs. 1000/-",
      bgColor: "#8B7355"
    }
  ];

  return (
    <div className="products-section">
      <h2 className="section-title">PRODUCTS</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{backgroundColor: product.bgColor}}>
            <div className="product-image-placeholder">
              <div className="product-package"></div>
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