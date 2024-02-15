import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";


const ProductPage = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([] as any[]);

  useState(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  });

  const { data, error, isLoading } = useSWR('/api/products', fetcher);


  // useEffect(() => {

  //   fetch('/api/products')
  //   .then((response) => response.json())
  //   .then((result) => {
  //       setProducts(result.data);
  //   })

  // },[]);

  return (
    <>
    <ProductView products={!isLoading ? data.data : []} />

    </>
    
  );
};

export default ProductPage;
