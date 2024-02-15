type ProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    is_stock: boolean;
    stock: number;
  };
  
export type ProductViewProps = {
    products: ProductType[];
};