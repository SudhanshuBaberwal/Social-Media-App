import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../../public/assets";
import Loading from "../components/Loading";
import StoriesBar from "../components/StoriesBar";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [feeds, setfeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setfeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);
  return !loading ? (
    <div
      className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 
    flex items-start justify-center xl:gap-8"
    >
      <div>
        <StoriesBar />
        <div className="p-4 space-y-6">
          {feeds.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* RightSidebar  */}
      <div className="max-xl:hidden sticky top-0">
        <div className="max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow">
          <h3 className="text-slate-800 font-semibold">Sponsored</h3>
          {/* <img src={} alt="" /> */}
        </div>
        <h1>Recent Messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
