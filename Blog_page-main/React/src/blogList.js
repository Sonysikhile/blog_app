import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const BlogList = ({ blogs }) => {
    return (
      <div className="blog-list">
        <Navbar/>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>

          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;