import React from "react";
import './Blog.css';
import{Link} from 'react-router-dom';
const blogs = [
  {
    id: 1,
    date: "20 January, 2023",
    title: "Become a UX/UI Designer With Career Foundry.",
  },
  {
    id: 2,
    date: "15 January, 2023",
    title: "The Best App Development For Your Business Plan.",
  },
  {
    id: 3,
    date: "08 January, 2023",
    title: "The Best Portfolio For Agency Design Thinking",
  },
];

export default function BlogSection() {
  return (
    <>
      <div className="subtitle-BLOG"> <img src="/Images/g.png" alt="Designer" className="subtitle-blogs" />
      <h4 className="section-subtitle-blog">My Blog</h4></div>
      <h2 className="section-title">Latest Blog</h2>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-title">{blog.title}</h3>
   
              <Link to="/Blogview" className="blog-link">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
 