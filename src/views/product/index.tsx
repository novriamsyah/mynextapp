import { spaceMono } from "@/utils/fonts";
import style from "./Product.module.scss";
import { ProductViewProps } from "@/types/product.type";


const ProductView = ({ products }: ProductViewProps) => {
  return (
    <div className="container" style={spaceMono.style}>
      <h1 className="title-section text-2xl font-bold">Card Product</h1>
      <div className="flex-row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="card">
              <img
                src="https://source.unsplash.com/random/?shoes"
                alt="product"
              />
              <h2 className="card-title">{product.name}</h2>
              <p className="card-body line-clam-3">{product.description}</p>
              <p className="">
                Price: <span className="text-xl">$</span>
                <b>{product.price}</b>
              </p>
            </div>
          ))
        ) : (
          <div className={style.card_shimmer}>
            <div className={style.card_shimmer__img}></div>
            <div className={style.card_shimmer__title}></div>
            <div className={style.card_shimmer__description}></div>
            <div className={style.card_shimmer__price}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
