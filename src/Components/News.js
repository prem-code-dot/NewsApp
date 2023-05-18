import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PreLoader from './PreLoader';
import PropTypes from 'prop-types'; // is a type-checking mechanism that helps validate the props passed to components.
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalizedFirstLetter = (string) =>
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const update = async()=>{
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; // URL of a news API endpoint
        setloading(true)
        // props.setProgress(10)    
        let data = await fetch(url);  // fetch() function returns a Promise that represents the server's response.
        props.setProgress(30)
        let parsedData = await data.json(); // The json() method is to parse the response data as JSON. 
        props.setProgress(70)
        // console.log(parsedData); // to the console for debugging purposes.
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100)
    }

    // The Fetch API is a modern JavaScript interface that provides a way to make HTTP requests and handle responses from a web server. 
    // It allows developers to fetch resources asynchronously, which means the browser can continue executing other tasks while waiting for the response.

    useEffect(() => {
        document.title = `${capitalizedFirstLetter(props.category)} - NewsApp`;
        update(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
        // The await keyword is used to pause the execution of the code until the Promise returned by fetch() is resolved. 
        // This allows the code to wait for the response from the server.
    
    const fetchMoreData = async () =>
    {
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1 }&pageSize=${props.pageSize}`; // URL of a news API endpoint
        let data = await fetch(url); 
        let parsedData = await data.json(); 
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setpage(page+1)
    }   
    
  
    return (
        <>
            <div className= "my-3" >
                <h1 style ={{textAlign: "center", marginTop: '90px'}}> {capitalizedFirstLetter(props.category)} - Top Headlines </h1> 
                <div className="text-center"> 
                        {loading && <PreLoader />}
                </div> 
                
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<PreLoader />}
                    >
                    
                    <div className='container'>
                        <div className='row my-4' >
                            {articles.map((element)=>{ //map is used to loop through every element {here element is news from array articles}
                                return <div className='col-md-4' key = {element.url}> 
                                            <NewsItem title = {element.title} description = {element.description?element.description.slice(0, 88):""} 
                                            imageUrl = {element.urlToImage} 
                                            newsUrl={element.url}
                                            source = {element.source.name}
                                            date = {element.publishedAt}
                                            author = {element.author}
                                            />
                                        </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general',
}

News.propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.bool,
}

export default News