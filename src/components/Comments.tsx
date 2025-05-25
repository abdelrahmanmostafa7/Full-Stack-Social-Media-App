import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WriteComment  */}
      <div className="flex items-center gap-2">
        <Image
          src="https://images.unsplash.com/photo-1743890290573-257c245b8881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full "
        />
        <div className="flex flex-1 items-center gap-2 bg-slate-50 p-2 rounded-xl w-full py-1 px-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 bg-transparent rounded-lg p-2"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          />
          <Image
            src="/share.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      {/* Comments  */}
      <div className="flex  gap-2 mt-6">
        <Image
          src="/noAvatar.png"
          width={40}
          height={40}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-1 flex-col gap-1">
          <span className="font-medium">Rure</span>
          <p className="text-gray-700 items-center justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ullam amet ipsa, voluptas ipsum aliquid quae pariatur nisi
            delectus facere itaque, iusto impedit! Labore numquam, quod magnam
            vero
          </p>
          <div className="flex  items-center gap-4 text-gray-500 mt-2">
            <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg">
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
            <span className="text-sm  bg-slate-50 p-1 rounded-lg cursor-pointer">
              Reply
            </span>
            {/* <span className="text-sm  bg-slate-50 p-2 rounded-lg">1d</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
