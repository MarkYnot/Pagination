import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const res = await axios.get(url);
        console.log(res);
        setLoading(false);
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); //componetDidmount

  //get posts of currentPage
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div> Loading...</div>;
  }

  return (
    <div className="container">
    <h1>My Blog</h1>
    <Posts posts={currentPagePosts} />
    <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
    />
  </div>
  );
}

