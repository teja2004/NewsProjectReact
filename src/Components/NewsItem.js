
import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {author , title , desc , urlImage , urlNews} = this.props;
    return (

      <div>
        <div className="card my-5 mx-3" style={{width: "18rem"}}>
            <img src={urlImage} style={{height : "100px !important",width : "120px !important"}} className="card-img-top" alt="..."/>
            <div className="card-body">
            Author : <span className="card-title">{author === null ? '-' : author}</span>
            <h4 className="card-title">{title} ...</h4>
            <p className="card-text">{desc} ...</p>
            <a href={urlNews} target="_blank" rel="noreferrer" className="text-center text-bold btn btn-outline-dark btn-sm">Complete The Article</a>
            </div>
        </div>
      </div>
    )
  }
}
