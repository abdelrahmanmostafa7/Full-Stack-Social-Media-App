// In this component we have 5 sections so there is 3 sections show in Home page and 2 sections show in Profile page

import Ad from "./Ad"
import Birthdays from "./Birthdays"
import FriendRequests from "./FriendRequests"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu