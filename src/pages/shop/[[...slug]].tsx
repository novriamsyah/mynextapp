import { useRouter } from "next/router";

const ShopPage = () => {

    const {query} = useRouter();

    return (
        <div>
            <h1>Shop Page</h1>
            <h1>Slug : {query.slug?.[0] ?? 'null'} - {query.slug?.[1] ?? 'null'}</h1>
        </div>
    );

}
export default ShopPage