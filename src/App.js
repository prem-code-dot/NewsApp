import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import dotenv from 'dotenv';

const App = (props) => {
  const pageSize = 9;
  // const apiKey = "ae2b9eddc57e4246b400c22089fb80ff";
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
  const [progress, setProgress] = useState(0)
  
    return (
      <>
        <BrowserRouter>
            <Navbar/>
            {/* {console.log(process.env.REACT_APP_NEWS_API_KEY)} */}
            <LoadingBar
              color='#f11946'
              height={3}
              progress = {progress}
            />
            <div>
            <Routes>  
                <Route exact path ="/" element={<News setProgress={setProgress} apiKey = {apiKey} key = "general " pageSize={pageSize} country = 'in' category = "general"/>} />
                <Route exact path ="/business" element={<News setProgress={setProgress} apiKey = {apiKey} key = "business" pageSize={pageSize} country = 'in' category = "Business"/>} />
                <Route exact path ="/sports" element={<News setProgress={setProgress} apiKey = {apiKey} key = "sports" pageSize={pageSize} country = 'in' category = "sports"/>}/>
                <Route exact path ="/entertainment" element={<News setProgress={setProgress} apiKey = {apiKey} key = "entertainment" pageSize={pageSize} country = 'in' category = "entertainment"/>}/>
                <Route exact path ="/technology" element={<News setProgress={setProgress} apiKey = {apiKey} key = "technology" pageSize={pageSize} country = 'in' category = "technology"/>}/>
                <Route exact path ="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key = "science" pageSize={pageSize} country = 'in' category = "science"/>} />
                <Route exact path ="/general" element={<News setProgress={setProgress} apiKey = {apiKey} key = "general" pageSize={pageSize} country = 'in' category = "general"/>} />
                <Route exact path ="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key = "health" pageSize={pageSize} country = 'in' category = "health"/>}/>
            </Routes>
          </div>      
        </BrowserRouter> 
      </>
    );
  }

 export default App;
