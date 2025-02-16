import React from "react";
import Link from "next/link";
import {
  FaCalendarDays,
  FaCircleUser,
  FaArrowUpRightFromSquare,
  FaEye,
  FaShareFromSquare,
  FaFireFlameCurved,
} from "react-icons/fa6";

type Blog = {
  title: string;
  thumbnail: string;
  author: string;
  date: string;
  tags: string[];
  link: string;
};

const BlogCard: React.FC<{ item: Blog }> = ({
  item: { title, thumbnail, link, date, author, tags },
}) => {
  // Limit tags to 3 and show "+X" for remaining tags
  const displayedTags = tags.slice(0, 3);
  const remainingTags = tags.length > 3 ? tags.length - 3 : 0;

  return (
    <div className="w-full bg-container shadow-lg rounded-3xl group overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Blog Thumbnail */}
      <div className="rounded-t-lg overflow-hidden relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-40 sm:h-44 object-cover group-hover:scale-110 transition-transform duration-300"
          aria-label={`Thumbnail for ${title}`}
        />
        {/* Overlay for Category and View Text */}
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className={`absolute top-3 left-3 text-xs bg-primary/80 text-white px-3 py-1 rounded-xl`}
          >
            <span>Web Development</span>
          </div>

          {/* Features */}
          <div className="absolute top-3 right-3 flex items-center gap-x-1">
            <FaFireFlameCurved className="text-lg text-red-600" />
            <span className="text-sm font-secondary text-white">Exclusive</span>
          </div>
          {/* Read Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 font-semibold text-primary-light/90 hover:text-primary transition-colors text-base">
            <button
              className="flex items-center gap-x-2"
              aria-label="Explore the Article"
            >
              Explore the Article <FaArrowUpRightFromSquare />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-4">
        {/* Author & Date */}
        <div className="flex justify-between text-xs items-center">
          {/* Author */}
          <span
            className="flex gap-x-1 items-center text-primary-light duration-300 cursor-pointer"
            aria-label={`Author: ${author}`}
          >
            <FaCircleUser className="text-primary" /> by{" "}
            <span className="font-medium hover:underline">{author}</span>
          </span>

          {/* Published Date */}
          <span className="flex gap-x-1 items-center text-primary">
            <FaCalendarDays className="text-primary-light" /> {date}
          </span>
        </div>

        {/* Blog Title */}
        <h3
          className="line-clamp-2 text-base font-semibold hover:text-primary transition-colors duration-300 cursor-pointer my-1"
          aria-label={title}
        >
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {displayedTags.map((tag, index) => (
              <span
                key={index}
                className="inline-block text-primary font-secondary text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
            {remainingTags > 0 && (
              <span className="text-primary text-xs font-medium">
                +{remainingTags}
              </span>
            )}
          </div>
          <div className="text-primary text-lg flex items-center gap-x-3">
            <Link href={link}>
              <FaEye aria-label="View" />
            </Link>
            <FaShareFromSquare aria-label="Share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlogCard);
