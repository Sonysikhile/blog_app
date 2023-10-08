import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('priya');
  const navigate=useNavigate();
  const [ispending,setIspending]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIspending(true);
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      navigate('/Home');
    })
  }

    return (
      <div className="create">
        <Navbar/>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Select">Select an author</option>
          <option value="Sony">Sony</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button>Adding Blog....</button>}
      </form>
      </div>
    );
  }
   
  export default Create;