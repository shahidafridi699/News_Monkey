import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className = "my-3">
        <div className="card" style={{width: "18rem"}}>
      <img src={!imageUrl? "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/10/OnePlus-13-design.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel= "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
