import  {useState , useEffect } from "react";

const RedditBad = ({ subject }) => {
  const [titles, setTitles] = useState([]);
  const url = `https://www.reddit.com/r/${subject}.json`;
  const getTitles = () => {
    fetch(url)
      .then((res) => res.json())
      .then((fetchData) => {
        const items = fetchData.data.children;
        const titles = items.map((item) => item.data.title);
        setTitles(titles);
      })
      .catch((err) => console.error(err));
  }
  useEffect(getTitles, [subject]);

  const elements = titles.map((title ,index) => <p key={index}>{title}</p>);
  return <div>{elements}</div>;
};

export default RedditBad;
