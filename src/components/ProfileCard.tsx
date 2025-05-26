import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.unsplash.com/photo-1747893540759-290a8a06a91f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={"/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-5 ring-1 ring-white z-10"
        />
      </div>
      <div className=" flex flex-col gap-2 items-center">
        <span className="font-semibold text-lg ">Abdelrahman Zaki</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={16}
              height={16}
              className="rounded-full object-cover w-4 h-4"
            />
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={16}
              height={16}
              className="rounded-full object-cover w-4 h-4"
            />
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={16}
              height={16}
              className="rounded-full object-cover w-4 h-4"
            />
          </div>
          <span className="text-sm text-gray-500">300 Followers</span>
        </div>
      </div>
      <button className="bg-blue-600 text-white rounded-md  text-lg py-1">
        My Profile
      </button>
    </div>
  );
}

export default ProfileCard