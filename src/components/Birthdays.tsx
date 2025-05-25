import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top  */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold ">Birthday</h2>
      </div>

      {/* User Celebrate  */}
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
        <button className="p-1 bg-blue-600 text-white rounded-md">
          Celebrate
        </button>
      </div>

      {/* Bottom  */}

      <div className="p-4 flex items-center justify-between rounded-md bg-slate-100 gap-2">
        <Image
          src="/gift.png"
          alt=""
          width={30}
          height={30}
          className="cursor-pointer "
        />
        <Link href="/" className="flex flex-col text-xs gap-1">
          <span className="text-gray-700">Upcoming Birthdays</span>
          <span className="text-gray-500">
            See other 15 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
