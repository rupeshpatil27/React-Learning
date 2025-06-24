import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiEye } from "react-icons/fi";


const Blog = ({ data }) => {

  return (

    <div className="w-60 mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          {/* <img src={data?.imageUrl} alt="Blog Cover" className="h-full w-full object-cover" /> */}
          <span className="text-gray-400">Image Placeholder</span>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{data?.title || "Untitled Blog"}</h2>
        <div className="flex justify-between text-gray-600 text-sm items-center">
          <div className="flex items-center space-x-1">
            <AiOutlineLike className="text-green-500" />
            <span>{data?.reactions?.likes || 0}</span>
          </div>
          <div className="flex items-center space-x-1">
            <AiOutlineDislike className="text-red-500" />
            <span>{data?.reactions?.dislikes || 0}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiEye className="text-blue-500" />
            <span>{data?.views || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
