import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PreLoader from './PreLoader';
import PropTypes from 'prop-types'; // is a type-checking mechanism that helps validate the props passed to components.
import InfiniteScroll from 'react-infinite-scroll-component';
// import './Pendulum.gif';


export class News extends Component {

    // articles= [
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Kara Scannell",
    //         "title": "Trump will not testify in E. Jean Carroll battery trial | CNN Politics",
    //         "description": "Former President Donald Trump will not testify in the civil battery and defamation trial after his attorney did not inform the court of a change in strategy by a judge-imposed deadline of 5 p.m. Sunday.",
    //         "url": "https://www.cnn.com/2023/05/07/politics/donald-trump-e-jean-carroll-battery-trial-testimony/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230320111636-01-donald-trump-file.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-05-07T21:18:54Z",
    //         "content": "Former President Donald Trump will not testify in the civil battery and defamation trial after his attorney did not inform the court of a change in strategy by a judge-imposed deadline of 5 p.m. Sund… [+50 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "E.J. Dionne Jr.",
    //         "title": "There’s a war raging. It’s against normal politics.",
    //         "description": "The breakdown of normal has been a long time in gestation.",
    //         "url": "https://www.washingtonpost.com/opinions/2023/05/07/politics-republicans-war-on-normal/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XS5NUVROBUI6RDOJHNI6AKFYIU.jpg&w=1440",
    //         "publishedAt": "2023-05-07T11:00:28Z",
    //         "content": "Comment on this story\r\nComment\r\nThe distemper in public opinion can be explained by many factors, including a social hangover from the pandemic and economic jitters, even in the face of a strong job … [+5313 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Karishma Mehrotra",
    //         "title": "A caste survey in India could upend politics in world’s largest democracy",
    //         "description": "The Indian state Bihar has taken a historic step in surveying its castes, and the resulting data could fragment the national voter coalition of the governing Bharatiya Janata Party.",
    //         "url": "https://www.washingtonpost.com/world/2023/05/05/india-bihar-caste-survey/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BZNJ4TLOWZCQA3HDDVCQO5CAIA.jpg&w=1440",
    //         "publishedAt": "2023-05-07T10:00:28Z",
    //         "content": "Comment on this story\r\nComment\r\nPATNA, India The morning milk had yet to be delivered, but the April heat was already leaving stains on his shirt. Satyadeo Paswans brows furrowed as he flipped page a… [+8607 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "",
    //         "title": "An agitated Trump appears in newly released deposition tapes | CNN Politics",
    //         "description": "A 48-minute video of Trump's E. Jean Carroll deposition in which he's accused of raping Carroll in the 1990s was released.",
    //         "url": "https://www.cnn.com/videos/politics/2023/05/05/trump-deposition-video-e-jean-carroll-orig-contd-bu.cnn",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230505194653-trump-deposition-thumb.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2023-05-05T23:55:36Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "newsweek",
    //             "name": "Newsweek"
    //         },
    //         "author": "Mark Davis",
    //         "title": "Newsweek",
    //         "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
    //         "url": "https://www.newsweek.com/",
    //         "urlToImage": "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
    //         "publishedAt": "2023-03-01T12:07:28.8517009Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-jerusalem-post",
    //             "name": "The Jerusalem Post"
    //         },
    //         "author": null,
    //         "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
    //         "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
    //         "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
    //         "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
    //         "publishedAt": "2019-11-13T04:41:00Z",
    //         "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    //     }
    // ]

    static defaultProps = {
        country: 'in',
        pageSize: '6',
        category: 'general',
    }

    static propType = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.bool,
    }

    capitalizedFirstLetter = (string) =>
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    constructor(props){ // Constructor is used for initializing the local state of the component by assigning an object to this.state.
        super(props); // Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class. It returns an object which represents the parent class.

        this.state = {
                // articles: this.articles, // since there is no sample responses there is no object
                articles: [],
                loading: true,
                page:1,
                totalResults: 0,
        }
        document.title = `${this.capitalizedFirstLetter(this.props.category)} - My News Page`;
    }

    async update(){
        const apiKey = process.env.REACT_APP_API_KEY;
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; // URL of a news API endpoint
        this.setState({loading: true});
        this.props.setProgress(30)
        let data = await fetch(url);  // fetch() function returns a Promise that represents the server's response.
        this.props.setProgress(70)
        let parsedData = await data.json(); // The json() method is to parse the response data as JSON. 
        // console.log(parsedData); // to the console for debugging purposes.
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,  
            loading: false,
         }); //This triggers a re-render of the component with the updated state. {articles property set to the parsedData.articles}
         this.props.setProgress(100)
    }

    // The Fetch API is a modern JavaScript interface that provides a way to make HTTP requests and handle responses from a web server. 
    // It allows developers to fetch resources asynchronously, which means the browser can continue executing other tasks while waiting for the response.

    async componentDidMount(){ //  represents a component's lifecycle
        this.update();

        // The await keyword is used to pause the execution of the code until the Promise returned by fetch() is resolved. 
        // This allows the code to wait for the response from the server.
    }

    fetchMoreData = async () =>
    {
        // this.setState({page: this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page + 1 }&pageSize=${this.props.pageSize}`; // URL of a news API endpoint
        let data = await fetch(url); 
        // fetch() function returns a Promise that represents the server's response.
        let parsedData = await data.json(); // The json() method is to parse the response data as JSON. 
        // console.log(parsedData); // to the console for debugging purposes.
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),  
            totalResults: parsedData.totalResults,
            page: this.state.page+1,
            // loading: false,
         });
    }   
    
    // handlePrevClick = async ()=>
    // {
    //     this.update();        
    //     this.setState({ page: this.state.page - 1})   
    // }

    // handleNextClick = async ()=>
    // {
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/`${this.props.pageSize}`)))
    //     {
    //         this.update();        
    //         this.setState({ page: this.state.page + 1}) 
    //     }  
    // }
    
  render() {
    return (
        <>
            <div className= "my-3" >
                <h1 style ={{textAlign: "center"}}>Top Headlines </h1> 
                <div className="text-center"> 
                        {this.state.loading && <PreLoader />}
                </div> 
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<PreLoader />}
                    >
                    
                    <div className='container'>
                        <div className='row my-4' >
                            {this.state.articles.map((element)=>{ //map is used to loop through every element {here element is news from array articles}
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
}

export default News