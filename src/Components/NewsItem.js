
import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { author, title, desc, urlImage, urlNews, publishedAt } = this.props;
    return (

      <div>
        <div className="card mb-5">
            <img src={urlImage} style={{height : "100px !important",width : "120px !important"}} className="card-img-top" alt="..."/>
            <div className="card-body">
            Author : <span className="card-title">{author === null ? '-' : author}</span>
            <h4 className="card-title">{title} ..</h4>
            <p className="card-text">{desc} ....</p>
            <p class="card-text">{publishedAt}</p>
            <a href={urlNews} target="_blank" rel="noreferrer" className="text-center text-bold btn btn-outline-dark btn-sm">Complete The Article</a>
            </div>
        </div>
      </div>
    )
  }
}
