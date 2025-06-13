import "./product.css"
function Product({ product }) {
  return (
    <>
      <div key={product.id} className="product-card">
        <div className="product-image-wrapper">
          <img className="product-img" src={product.imageURL} alt="img" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </>
  );
}
export default Product;
