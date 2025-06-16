import "./product.css";
function Product({ product }) {
  return (
    <>
      <div key={product.id} className="product-card">
        <div className="product-image-wrapper">
          <img className="product-img" src={product.imageURL} alt="img" />
        </div>
        <div className="product-price-wrapper">

        <h2 className="product-name">{product.name}</h2>
        <h3 className="product-price">{product.price}</h3>
        </div>
        <div className="product-info">
          <h2 className="product-heading">{product.name}</h2>
          <p className="product-description">{product.description}</p>
        </div>
        <button>
          add to cart
        </button>
      </div>
    </>
  );
}
export default Product;
