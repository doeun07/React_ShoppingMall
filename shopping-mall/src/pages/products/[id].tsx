import { useQuery } from "@tanstack/react-query"
import { fetcher, QueryKeys } from "../../queryClient"
import ProductDetail from "../../components/product/detail";
import { useParams } from "react-router-dom";
import { Product } from "../../type";

const ProductDetailPage = () => {
    const { id } = useParams()

    const { data } = useQuery<Product>({
        queryKey: [QueryKeys.PRODUCTS, id],
        queryFn: () =>
            fetcher({
                method: 'GET',
                path: `/products/${id}`,
            }),
    });

    if (!data) return null;

    return (
        <div>
            <h2>상품상세</h2>
            <ProductDetail item={data}/>
        </div>
    ) 
}
export default ProductDetailPage