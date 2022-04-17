import { useEffect, useState } from "react";
import "./styles.css";

// const content = "posts"

export default function App() {
  const [resourse, setresourse] = useState("posts");
  const [json, setJson] = useState([]);
  const [loading, setLoading] = useState(true);
  const showLoading = () => setLoading(true);

  const hideLoading = () => setLoading(false);

  const fetchData = () => {
    showLoading()
    fetch(`https://jsonplaceholder.typicode.com/${resourse}`)
      .then(response => response.json())
      .then(data => {
          setJson(data);
        hideLoading()
      })};

  useEffect(() => {

    fetchData();

    return () => {
      console.log("cleaned up");
    };
  }, [resourse]);

  return (
    <div>
      <button
        onClick={() => {
          setresourse("posts");
        }}
      >
        post
      </button>
      <button
        onClick={() => {
          setresourse("users");
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          setresourse("comments");
        }}
      >
        Comments
      </button>

      <h1>
        {loading? "loading..."
          : json.map((jsn) => {
              // console.log(jsn);
              return <pre key={json[jsn]}>{JSON.stringify(jsn)}</pre>;
            })}
      </h1>
    </div>
  );
          }
