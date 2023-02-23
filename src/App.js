import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GuestHome from './pages/GuestHome';
import Navbar from './components/layout/Navbar';
import Login from './pages/login';
import Register from './pages/Registeration';
//import Navbar from './components/CustomNavbar';

import MentorProfile from './pages/MentorProfile';
import CustomFooter from './components/layout/CustomFooter';
import EditProfile from './components/profile/editProfile.js/EditProfile';

import Home from './pages/Home';
import Footer from './components/layout/Footer';
import BlogView from './pages/BlogView';
import CreateBLog from './pages/CreateBlog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={GuestHome} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/mentorProfile" component={MentorProfile} />
          <Route exact path="/viewBlogDetails" component={BlogView} />
          <Route exact path="/CreateBLog" component={CreateBLog} />

        </Switch>
        <Footer />
      </BrowserRouter>

    </>
  )
}
// MentorProfile

export default App;
