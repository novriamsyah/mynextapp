import { useRouter } from "next/router";

const DetailProductPage = () => {

    const {query} = useRouter();
    
    return (
        <div>
        <h1>Detail Product Page UUID : {query.uuid}</h1>
        </div>
    );
}

export default DetailProductPage;