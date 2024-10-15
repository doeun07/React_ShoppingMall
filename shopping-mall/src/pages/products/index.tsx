import { useQuery } from '@tanstack/react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from "../../type"
import ProductItem from '../../components/product/item';


const ProductList = () => {
    const { data } = useQuery({
        queryKey: [QueryKeys.PRODUCTS],
        queryFn: () =>
            fetcher({
                method: 'GET',
                path: '/products',
            }),
    });

    return (
        <div>
            <h2>상품목록</h2>
            <ul className='products'>
                {data?.map(product => (
                    <ProductItem {...product} key={product.id} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
