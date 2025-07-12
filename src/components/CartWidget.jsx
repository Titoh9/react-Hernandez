const CartWidget = () => {
  const itemsInCart = 3;

  return (
    <div className="d-flex align-items-center text-white">
      <i className="bi bi-cart-fill"></i>
      <span className="ms-2">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;
