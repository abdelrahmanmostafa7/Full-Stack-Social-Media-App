import Image from "next/image";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-64 relative">
        <Image
          src="https://images.unsplash.com/photo-1726064856060-726ff0fc6b37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1747707500493-823ce421d2b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={128}
          height={128}
          className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-2 ring-white z-10"
        />
      </div>
      <h1 className="mt-20  text-3xl font-medium">Abdelrahman Zaki</h1>
      <span className="text-sm mb-4">@boyka_amz</span>

      <div className="flex  gap-12 items-center justify-center">
        <div className="flex flex-col items-center ">
          <span className="font-medium">556</span>
          <span className="text-sm">Posts</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="font-medium">3.6K</span>
          <span className="text-sm">Followers</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="font-medium">2.7K</span>
          <span className="text-sm">Following</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
