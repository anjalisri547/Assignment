import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blogview.css";

export default function Blogview() {
  const blogItems = [
    { dt: "20 Jan, 2023", heading: "Become a UX/UI Designer with Career Foundry." },
    { dt: "15 Jan, 2023", heading: "Best App Development For Your Business Plan." },
    { dt: "08 Jan, 2023", heading: "Best Portfolio For Agency Design Thinking" },
    { dt: "10 Jan, 2023", heading: "Become a UX/UI Designer With Career Foundry" },
    { dt: "11 Jan, 2023", heading: "The Complete Guide to UI Breadcrumbs." },
    { dt: "06 Jan, 2023", heading: "The Top 5 UI Design Principles You Need to Know." },
    { dt: "27 Jan, 2023", heading: "What is Coding? A Beginner’s Guide" },
    { dt: "29 Jan, 2023", heading: "Redux Explained: Beginner’s Guide" },
    { dt: "21 Jan, 2023", heading: "Angular vs React: Which one to pick?" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const totalPages = Math.ceil(blogItems.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleBlogs = blogItems.slice(start, end);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
     
      <section className="blogArea">
        <div className="subtitle-Port">
          <img src="/Images/g.png" alt="Designer" className="subtitle-PORT" />
          <h4 style={{ marginBottom: "6px" }} className="viewblog">
            My Blog
          </h4>
        </div>
        <h2 style={{textAlign:"center"}}>Latest Articles</h2>

        <div className="blogGrid">
          {visibleBlogs.map((b, idx) => (
            <article key={`blog-${idx}`} className="blogBox">
              <div className="blogThumb" />
              <div className="blogText">
                <small>{b.dt}</small>
                <h3>{b.heading}</h3>
                <Link to="/view-blog">Read More →</Link>
              </div>
            </article>
          ))}
        </div>

      
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </section>
    </div>
  );
}
