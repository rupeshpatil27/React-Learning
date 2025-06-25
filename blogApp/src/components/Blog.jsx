import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiEye } from "react-icons/fi";


const Blog = ({ data }) => {
  return (
    <div className="w-1/4 h-full flex flex-col relative shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">

      <div className="flex-1 aspect-square bg-gray-200 overflow-hidden">
        <img src={`https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`} alt="Blog Cover" className="w-full m-auto block object-cover flex-shrink-0 flex-grow-0 aspect-square group-hover:scale-[1.2] duration-200" />
      </div>

      <div className="p-5 hover:cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-800 mb-5 hover:text-cyan-500 text-left">{data?.title || "Untitled Blog"}</h2>
          <div className="flex justify-between  text-sm items-center">
            <div className="flex items-center space-x-1 hover:scale-[1.1] duration-200">
              <AiOutlineLike className="text-green-500" />
              <span>{data?.reactions?.likes || 0}</span>
            </div>
            <div className="flex items-center space-x-1 hover:scale-[1.1] duration-200">
              <AiOutlineDislike className="text-red-500" />
              <span>{data?.reactions?.dislikes || 0}</span>
            </div>
            <div className="flex items-center space-x-1 hover:scale-[1.1] duration-200">
              <FiEye className="text-blue-500" />
              <span>{data?.views || 0}</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Blog;
