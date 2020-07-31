import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'
import AddPost from './containers/AddPost/AddPost'
import ItemProfile from './containers/ItemProfile/ItemProfile'
import {setPost} from './store/actions/actions'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {getPosts} from './api/api'
import NotFound from './components/NotFound/NotFount';


const App = (props) => {
  useEffect(()=>{
    getPosts().then((res)=>{
         props.setPost([...res.data])
    })
  },[])
  
  return (
    <BrowserRouter>
        <div>   
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />                    
                <Route path="/post/:id" component={ItemProfile} /> 
                <Route path="/add" component={AddPost} /> 
                <Route component={NotFound}/>                  
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

const mapDispachToProps = (dispatch) => {
  return {
      dispatch,
      ...bindActionCreators({
          setPost
      },dispatch)
  }
}

export default connect(null,mapDispachToProps)(App)

