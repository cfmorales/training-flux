import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import {Route, Switch, Redirect} from 'react-router-dom';
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
function App() {


    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} />
            <Header/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/courses' component={CoursesPage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/course/:slug' component={ManageCoursePage}></Route>
                <Route path='/create-course' component={ManageCoursePage}/>
                <Redirect from='/about-test' to='about'></Redirect>
                <Route component={NotFoundPage}/>
            </Switch>

        </div>
    );
}

export default App;
