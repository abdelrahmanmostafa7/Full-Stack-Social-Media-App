import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[calc(100vh-75px)] flex items-center justify-center">
      <SignUp />
    </div>
  );
}
