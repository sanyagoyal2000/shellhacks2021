import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Header from './components/Header';
//import Footer from './components/Footer';
//import Middle from './components/Middle';
import Home from './pages/home';
import AboutUs from './pages/about';
import Mentors from './pages/mentor';
import Mentees from './pages/mentee';
import ProFam from './pages/profam';
import SignUp from './pages/signup';
import Chats from './pages/chats';
import Login from './pages/login';
import ContactUs from './pages/contact';
import Blogs from './pages/blog';
import { AuthProvider } from "./contexts/AuthContext";


import NotFound from './pages/notfound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
    
        <Switch>
              <Route  path = "/" component = {Home} exact />
              <Route  path = "/about" component = {AboutUs} exact />
              <Route  path = "/mentor" component = {Mentors} exact/>
              <Route  path = "/mentee" component = {Mentees} exact />
              <Route  path = "/signup" component = {SignUp} exact/>
              <Route  path = "/login" component = {Login} exact/>
              <Route  path = "/blog" component = {Blogs} exact/>
              <Route  path = "/contact" component = {ContactUs} exact/>
              
              <AuthProvider> 
                <Switch>
                  <Route  path = "/profam" component = {ProFam} exact/>
                  <Route  path = "/chats" component = {Chats} exact/>

                  
                 </Switch>
              </AuthProvider>
              <Route component={NotFound}/>
              
          
        </Switch>
       
     </div>
      </BrowserRouter>
     
    
  );
}

export default App;
