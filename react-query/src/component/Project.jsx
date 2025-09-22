import { useQuery } from '@tanstack/react-query';
import { FaCube, FaStar, FaTag } from 'react-icons/fa6';
import { fetchProducts } from '../api/product';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-xl overflow-hidden border border-gray-200 hover:border-none">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>

                <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
                    <span className="text-green-600 text-sm">{product.discountPercentage}% OFF</span>
                </div>

                <div className="flex items-center text-yellow-500 text-sm">
                    <FaStar className="w-5 h-5 mr-1" />
                    {product.rating}
                </div>

                <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center">
                        <FaCube className="w-4 h-4 mr-1" />
                        Stock: {product.stock}
                    </div>
                    <div className="flex items-center">
                        <FaTag className="w-4 h-4 mr-1" />
                        {product.brand}
                    </div>
                </div>
            </div>
        </div>
    );
};


const Project = () => {

       const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProducts,
        enabled: true,
    });


    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    if(isError){
        return <h1>Error</h1>
    }

    return (
        <div className="flex justify-center items-center my-10 px-10">
            <div className="w-full flex items-stretch flex-col box-border bg-white rounded-xl container-shadow">
                <div className="w-full flex items-center justify-start p-3">
                    <div className="text-xl font-medium">Projects</div>
                </div>

                <div className='border-b border-light border-opacity-10 w-full mt-2'/>

                <div className="pt-1 pb-5 mt-5">
                    <div className="w-full px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {data?.products.map((product, index) => (
                                <ProductCard product={product} key={index} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project