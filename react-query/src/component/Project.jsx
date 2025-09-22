import { FaCube, FaStar, FaTag } from 'react-icons/fa6';

const products = [
    {
        title: 'Cool Wireless Headphones',
        price: 9.99,
        discountPercentage: 7.17,
        rating: 4.94,
        stock: 5,
        brand: 'Essence',
        image: 'https://via.placeholder.com/300x200.png?text=Product+1',
    },
    {
        title: 'Smart Watch Series 5',
        price: 19.99,
        discountPercentage: 10.5,
        rating: 4.7,
        stock: 8,
        brand: 'TimePro',
        image: 'https://via.placeholder.com/300x200.png?text=Product+2',
    },
    {
        title: 'Bluetooth Speaker',
        price: 14.99,
        discountPercentage: 5.0,
        rating: 4.5,
        stock: 12,
        brand: 'BoomBox',
        image: 'https://via.placeholder.com/300x200.png?text=Product+3',
    },
    {
        title: 'Wireless Mouse',
        price: 7.99,
        discountPercentage: 3.5,
        rating: 4.2,
        stock: 20,
        brand: 'Clickify',
        image: 'https://via.placeholder.com/300x200.png?text=Product+4',
    },
    {
        title: 'Noise Cancelling Earbuds',
        price: 29.99,
        discountPercentage: 12.0,
        rating: 4.9,
        stock: 3,
        brand: 'SilentPro',
        image: 'https://via.placeholder.com/300x200.png?text=Product+5',
    },
];

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out rounded-xl overflow-hidden border border-gray-200">
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
    return (
        <div className="flex justify-center items-center my-10 px-10">
            <div className="w-full flex items-stretch flex-col box-border bg-white rounded-xl container-shadow">
                <div className="w-full flex items-center justify-start border-b border-light border-opacity-10 py-5">
                    <div className="text-xl font-medium">Projects</div>
                </div>

                <div className="pt-1 pb-5 mt-5">
                    <div className="w-full px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {products.map((product, index) => (
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