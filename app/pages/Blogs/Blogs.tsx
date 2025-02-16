import { useState, useMemo, useEffect, useCallback } from 'react';
import { HeadingPrimary } from '@/app/components/Headings';
import { blogs } from '@/app/data/BlogsData';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import BlogCard from './BlogCard';
import { Button } from '@nextui-org/react';

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages]
  );

  const renderPrevButton = () => (
    <li
      key="prev"
      onClick={() => handlePageChange(currentPage - 1)}
      className="flex items-center hover:text-white hover:bg-primary text-primary font-semibold cursor-pointer py-1 xs:py-2 px-2 xs:px-4 rounded-full transition duration-300 ease-in-out text-sm sm:text-base"
      aria-label="Previous"
    >
      <FaAngleLeft /> Prev
    </li>
  );

  const renderNextButton = () => (
    <li
      key="next"
      onClick={() => handlePageChange(currentPage + 1)}
      className="flex items-center hover:text-white hover:bg-primary text-primary font-semibold cursor-pointer px-2 py-1 xs:py-2 xs:px-4 rounded-full transition duration-300 ease-in-out text-sm sm:text-base"
      aria-label="Next"
    >
      Next <FaAngleRight />
    </li>
  );

  const renderDots = (key: string) => (
    <li key={key} className="dots text-xl xs:text-2xl text-primary cursor-default">
      ...
    </li>
  );

  const renderPageNumbers = () => {
    const pages = [];
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;

    if (currentPage > 2) {
      pages.push(
        <li
          key="first"
          onClick={() => handlePageChange(1)}
          className="numb text-primary font-semibold cursor-pointer h-8 w-8 xs:h-11 xs:w-11 flex items-center justify-center rounded-full transition duration-300 ease-in-out text-sm sm:text-base"
          aria-label="First Page"
        >
          1
        </li>
      );
      if (currentPage > 3) {
        pages.push(renderDots("dots-before"));
      }
    }

    if (currentPage === totalPages) beforePage -= 2;
    if (currentPage === totalPages - 1) beforePage -= 1;
    if (currentPage === 1) afterPage += 2;
    if (currentPage === 2) afterPage += 1;

    for (let page = Math.max(1, beforePage); page <= Math.min(totalPages, afterPage); page++) {
      pages.push(
        <li
          key={page}
          onClick={() => handlePageChange(page)}
          className={`numb text-primary font-semibold cursor-pointer h-8 w-8 xs:h-11 xs:w-11 flex items-center justify-center rounded-full transition duration-300 ease-in-out ${
            page === currentPage ? "bg-primary text-white font-medium" : ""
          }`}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </li>
      );
    }

    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        pages.push(renderDots("dots-after"));
      }
      pages.push(
        <li
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className="numb text-primary font-semibold cursor-pointer h-8 w-8 xs:h-11 xs:w-11 flex items-center justify-center rounded-full transition duration-300 ease-in-out text-sm sm:text-base"
          aria-label="Last Page"
        >
          {totalPages}
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="w-max mx-auto mt-8" role="navigation">
      <ul className="w-full flex bg-container p-1 sm:p-2 rounded-full shadow-2xl">
        {currentPage > 1 && renderPrevButton()}
        {renderPageNumbers()}
        {currentPage < totalPages && renderNextButton()}
      </ul>
    </div>
  );
};

const Blogs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(3); // Start at page 3
  const [limit, setLimit] = useState<number>(3);  // Default limit

  useEffect(() => {
    const updateLimit = () => {
      setLimit(window.innerWidth >= 470 && window.innerWidth <= 1024 ? 4 : 3);
    };

    updateLimit(); // Initial call
    window.addEventListener("resize", updateLimit); // Update on resize

    return () => window.removeEventListener("resize", updateLimit); // Cleanup
  }, []);

  const totalItems: number = blogs.length;
  const totalPages: number = useMemo(() => Math.ceil(totalItems / limit), [totalItems, limit]);

  const getVisibleBlogCards = useMemo(() => {
    const beginIndex = (currentPage - 1) * limit;
    return blogs.slice(beginIndex, beginIndex + limit);
  }, [currentPage, limit]);

  return (
    <section id="blogs" className="section-container">
      <HeadingPrimary
        title="Blogs"
        subtitle="Latest Articles"
        context={<Button variant='shadow' color='primary' className="hidden md:block">View All Blogs</Button>}
      />
      <div>
        <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getVisibleBlogCards.map((blog) => (
            <BlogCard key={blog.title} item={blog} />
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </section>
  );
};

export default Blogs;