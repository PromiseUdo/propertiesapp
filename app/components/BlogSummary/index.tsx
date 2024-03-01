import React from "react";
import PostCard from "../PostCard";

const posts = [
  { img: "/blog1.jpg", title: "9 Must visit villages in Lagos" },
  { img: "/blog2.jpg", title: "Where to rent a shortlet for Valentine" },
  { img: "/blog3.webp", title: "Most affordable cities in Nigeria" },
  { img: "/blog4.webp", title: "Top 10 cities to visit in Nigeria" },
];

const BlogSummary = () => {
  return (
    <div>
      <h1 className="text-[#f7f7f7]">Top Posts</h1>
      <div className="my-5 flex items-center gap-4">
        {posts.map((post, idx) => (
          <PostCard key={idx} image={post.img} title={post.title} />
        ))}
      </div>

      <div className="flex items-center gap-3 justify-center flex-col">
        <button className="bg-slate-700 text-[#f7f7f7] py-2 px-4 rounded-md">
          All Blog News
        </button>
      </div>
    </div>
  );
};

export default BlogSummary;
