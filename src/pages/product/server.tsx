import { ProductViewProps } from "@/types/product.type";
import ProductView from "@/views/product";

const ProductServer = (props: ProductViewProps) => {
    const {products} = props;
  return (
    <>
      <ProductView products={products} />
    </>
  );
};

export default ProductServer;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
}
