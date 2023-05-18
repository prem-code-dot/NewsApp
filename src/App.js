import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import dotenv from 'dotenv';


export default class App extends Component {
  pageSize = 9;
  apiKey = "ae2b9eddc57e4246b400c22089fb80ff";
  // apikey = process.env.REACT_APP_NEWS_API_KEY;
  
  state = {
    progress: 0,
  }

  setProgress = (progress) => //function
  {
    this.setState({progress:progress});
  }

  render() {
    return (
      <>
        <BrowserRouter>
            <Navbar/>
            {/* {console.log(process.env.REACT_APP_NEWS_API_KEY)} */}
            <LoadingBar
              color='#f11946'
              height={3}
              progress={this.state.progress}
            />
            <div>
            <Routes>  
                <Route exact path ="/" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "general " pageSize={this.pageSize} country = 'in' category = "general"/>} />
                <Route exact path ="/business" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "business" pageSize={this.pageSize} country = 'in' category = "Business"/>} />
                <Route exact path ="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "sports" pageSize={this.pageSize} country = 'in' category = "sports"/>}/>
                <Route exact path ="/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "entertainment" pageSize={this.pageSize} country = 'in' category = "entertainment"/>}/>
                <Route exact path ="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "technology" pageSize={this.pageSize} country = 'in' category = "technology"/>}/>
                <Route exact path ="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "science" pageSize={this.pageSize} country = 'in' category = "science"/>} />
                <Route exact path ="/general" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "general" pageSize={this.pageSize} country = 'in' category = "general"/>} />
                <Route exact path ="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key = "health" pageSize={this.pageSize} country = 'in' category = "health"/>}/>
            </Routes>
          </div>      
        </BrowserRouter> 
      </>
    );
  }
}

// export default App;
