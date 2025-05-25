import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* UserInfo */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Rure</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>

      {/* Desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.unsplash.com/photo-1746980776869-0443aaffc7f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          cum assumenda illo possimus vero esse ab sequi consequatur consectetur
          excepturi.
        </p>
      </div>

      {/* Interaction */}
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
          <Image
            src="/like.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          />
          <span className="text-sm text-gray-500">|</span>
          <span className="text-sm text-gray-500">
            12 <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
          <Image
            src="/comment.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          />
          <span className="text-sm text-gray-500">|</span>
          <span className="text-sm text-gray-500">
            5 <span className="hidden md:inline">Comments</span>
          </span>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
          <Image
            src="/share.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          />
          <span className="text-sm text-gray-500">|</span>
          <span className="text-sm text-gray-500">
            3 <span className="hidden md:inline">Shars</span>
          </span>
        </div>
      </div>

        {/* Comments */}
        <Comments />
    </div>
  );
};

export default Post;
