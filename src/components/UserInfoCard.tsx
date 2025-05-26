import Link from "next/link";
import Image from "next/image";

const UserInfoCard = (userId: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top  */}
      <div className="flex items-center justify-between ">
        <h2 className="text-lg font-semibold">User Information</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          See All
        </Link>
      </div>

      {/* Bottom  */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Abdelrahman Zaki</span>
          <span className="text-sm ">@boyka_amz</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          perferendis possimus qui id provident fuga et ipsa nemo tempore
          inventore!
        </p>

        <div className="flex gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Cairo</b>
          </span>
        </div>
        <div className="flex gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>El-Shorouk Academy </b>
          </span>
        </div>
        <div className="flex gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Freelance</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="https://abdelrahmanmostafazaki.vercel.app/"
              className="text-md font-medium text-blue-500"
            >
              My Portfolio
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span className="text-sm">Joined on 1 Jan 2023</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white rounded-md font-medium text-lg p-2">
          Following
        </button>
        <button className="bg-red-600 text-white rounded-md font-medium text-lg p-2">
          Block
        </button>
      </div>
    </div>
  );
};

export default UserInfoCard;
