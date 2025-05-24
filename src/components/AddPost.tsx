import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 flex justify-between bg-white rounded-lg shadow-md text-sm">
      {/* Avatar  */}
      <Image
        src="https://images.unsplash.com/photo-1743890290573-257c245b8881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={64}
        height={64}
        className="w-16 h-16 object-cover rounded-full"
      />
      {/* Post  */}
      <div className="flex-1">
        {/* TextInput */}
        <div className="flex gap-4">
          <textarea
            placeholder="what's in your mind?"
            className="flex-1 bg-slate-50 rounded-lg p-2"
          ></textarea>

          {/* <Image
          src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          /> */}
        </div>
        {/* PostOptions  */}
        <div className="flex flex-wrap justify-center gap-8 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addimage.png"
              alt=""
              width={20}
              height={20}
            />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addvideo.png"
              alt=""
              width={20}
              height={20}
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt=""
              width={20}
              height={20}
             
            />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/poll.png"
              alt=""
              width={20}
              height={20}
              
            />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost