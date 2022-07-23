import React, { useEffect , useState} from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeWord = (word) =>{ 
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  document.title = `NewsSpot | ${capitalizeWord(props.category)} | Head Lines`;

// const updateNews = async()=> {
//   props.setProgress(10);
//   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bad70ec34d8f4ef68a265ef38ddf495a&page=${page}&pageSize=${props.pageSize}`;
//   props.setProgress(30);
//   setLoading(true)
//   let fetching = await fetch(url);
//   let dataUsers = await fetching.json();
//   props.setProgress(50);
//   setArticles(dataUsers.articles);
//   setTotalResults(dataUsers.totalResults);
//   setLoading(false);
//   props.setProgress(100);

// }

const updateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bad70ec34d8f4ef68a265ef38ddf495a&page=${page}&pageSize=${props.pageSize}`;
  props.setProgress(30);
  setLoading(true);
  let fetching = await fetch(url);
  let dataUsers = await fetching.json();
  props.setProgress(50);
  setArticles(dataUsers.articles);
  setTotalResults(dataUsers.totalResults);
  setLoading(false);
  props.setProgress(100);
};
useEffect(() => {
updateNews();
},[]);
  



const fetchMoreData = async () => {
  
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bad70ec34d8f4ef68a265ef38ddf495a&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
let fetching = await fetch(url);
let dataUsers = await fetching.json();
setArticles(articles.concat(dataUsers.articles));
setTotalResults(dataUsers.totalResults);
};

    
  return (
      <>
      <div className="container my-4">  
        <h2 className="text-center" style={{marginTop : '90px'}}>NewsSpot Digest {loading && <Loading/>} </h2>
        <hr />
        </div>
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.lenght !== totalResults} loader={<Loading />}>
          <div className="container">
            <div className="row d-flex justify-content-center mx-auto my-auto" style={{ height: "10%" }}>
              {articles.map((ele) => {
                  return (
                    <div className="col-md-4" key={ele.url}>
                      <NewsItem
                        author={ele.author}
                        title={ele.title}
                        desc={ele.description}
                        urlImage={
                          ele.urlToImage === null
                            ? "https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_960_720.png"
                            : ele.urlToImage
                        }
                        urlNews={ele.url}
                        publishedAt={new Date(ele.publishedAt).toGMTString()}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};