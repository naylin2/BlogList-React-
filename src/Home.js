import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div className="p20">{ error }</div> }
      { isPending && <div className="p20">Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;
