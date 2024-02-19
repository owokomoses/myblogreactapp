import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const Create  = () => {
const [data, setData] = useState({
    Title: "", 
    Author: "", 
    Body: ""
});

const handleChange=(e) => {
    const {name, value} = e.target;
    e.preventDefault()
    setData((prev)=>{
    return {...prev, [name] : value};
    })
}

const handleSubmit=() => {
    axios.post("http://localhost:4000/blogs", data)
    .then(res=>{setData (res.data)
    toast.success("New blog added sucessfully", 
    {position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000})
    })
    .catch(err=>{
    console.error(err);
    toast.error("Error setting new blog",
    {position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000})
    })
}

return(
    <div>
    <form onSubmit={handleSubmit}>
    <label>Title</label><br></br>
    <input className="content" name="Title" type="text" placeholder="Title" required value={data.Title} onChange={handleChange}></input> <br></br>

    <label>Author</label><br></br>
    <input className="content" name="Author" type="text" placeholder="Author" required value={data.Author} onChange={handleChange}></input> <br></br>

    <label>Body</label><br></br>
    <input className="content" name="Body" type="text" placeholder="Body" required value={data.Body} onChange={handleChange}></input> <br></br>

    <button>Save Blog</button>
    <ToastContainer/>
    </form>
    </div>
)
};
export default Create;