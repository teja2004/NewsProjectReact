import React, { Component } from 'react';
import NewsItem from "./NewsItem";
import Loading from "./Loading.js";
import PropTypes from "prop-types";

export default class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  
  constructor(){
    super();
    this.state = {
        articles : [],
        load : false,
        page : 1
    }
  }



  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bad70ec34d8f4ef68a265ef38ddf495a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let fetching = await fetch(url);
    let dataUsers = await fetching.json();
    this.setState({articles : dataUsers.articles
      , totalResults : dataUsers.totalResults ,
      loading : false
    });
  
  }

  previousBtn = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bad70ec34d8f4ef68a265ef38ddf495a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let fetching = await fetch(url);
    let dataUsers = await fetching.json();
  
    this.setState({
      page: this.state.page - 1,
      articles: dataUsers.articles,
      loading : false
    });
  }

  nextBtn = async ()=>{
    console.log("Next");
    if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
    {}
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bad70ec34d8f4ef68a265ef38ddf495a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let fetching = await fetch(url);
      let dataUsers = await fetching.json();

      this.setState({
        page: this.state.page + 1,
        articles: dataUsers.articles,
        loading : false
      });
    }}


  render(){
    return (
      <div className="container my-4">
        <div className="my-4">
          <h2 className="text-center">NewsSpot Digest {this.state.loading && <Loading/>} </h2>
          <hr />
          <div className="d-flex container justify-content-between">
            <button
              className="btn btn-outline-danger"
              onClick={this.previousBtn}
              disabled={this.state.page <= 1 ? true : false}
            >
              Previous
            </button>
            
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-outline-danger"
              onClick={this.nextBtn}
            >
              Next
            </button>
          </div>
        </div>

        <div className="row d-flex justify-content-center mx-auto my-auto"  style={{ height: "10%" }}>
          {!this.state.loading && this.state.articles.map((ele) => {
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
    );
  }
}
