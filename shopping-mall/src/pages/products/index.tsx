import { useQuery } from '@tanstack/react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import ProductItem from '../../components/product/item';
import { Product } from '../../type.ts';

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
            <ul className='products'>
                {data?.map(product => (
                    <ProductItem {...product} key={product.id} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
