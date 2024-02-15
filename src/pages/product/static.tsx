import { ProductViewProps } from "@/types/product.type";
import ProductView from "@/views/product";

const ProductStatic = (props: ProductViewProps) => {
    const {products} = props;
  return (
    <>
      <ProductView products={products} />
    </>
  );
};

export default ProductStatic;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
}
