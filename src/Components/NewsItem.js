import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {    
    let {title, discription, imageUrl, newsUrl, source, date, author} = this.props;
    return (
        <div className='my-3'>
            <div className="card">
              <div style ={{
                  justifyContent: 'flex-end',
                  display:'flex',
                  position:'absolute',
                  right: '0',
                }}>
                <span className="badge rounded-pill bg-danger" >{source}</span>
              </div>
            
                <img src={imageUrl?imageUrl:"https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po="} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <p className="card-text">{discription}...</p>
                    <p className="card-text"><small>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                </div>

            </div>
        </div>
            
    )
  }
}

export default NewsItem