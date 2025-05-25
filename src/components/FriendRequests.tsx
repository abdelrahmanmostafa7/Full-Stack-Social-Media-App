import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top  */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Friend Requests</h2>
        {/* <button className="text-blue-600 hover:underline">See All</button> */}
        <Link href="/" className="text-blue-600 hover:underline">
          See All
        </Link>
      </div>

      {/* Bottom  */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1743890290573-257c245b8881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full "
          />
          <span className="font-semibold">Josef Tito</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer "
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer "
          />
        </div>
      </div>

      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1743890290573-257c245b8881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full "
          />
          <span className="font-semibold">Josef Tito</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer "
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer "
          />
        </div>
      </div>
    </div>    
  );
};

export default FriendRequests;
