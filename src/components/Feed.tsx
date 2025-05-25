import Post from "./Post";

const Feed = () => {
  return (
    <div className="flex flex-col p-4 gap-8 bg-white rounded-lg shadow-md">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed