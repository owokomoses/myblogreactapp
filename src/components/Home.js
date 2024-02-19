import useFetch from "./useFetch"
import BlogList from "./Bloglist";

const Home = ()=>{
    const {data}=useFetch('http://localhost:4000/blogs')
return(
<div className="home">
    {data && <BlogList blogs = {data} title="All blogs"/>}
</div>
);
}
export default Home;