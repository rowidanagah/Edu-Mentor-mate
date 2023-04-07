import { useState } from "react";
import BlogsSection from "../components/Blog/BlogsSection";
import ProfileBackGround from "../components/profile/MentorProfile/ProfileBackGround";
import ProfileBioCard from "../components/profile/MentorProfile/ProfileBioCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const MentorProfile = () => {
    let getData = JSON.parse(localStorage.getItem("typeuser"));
    console.log("-------------", getData)
    let ismentor = getData == "mentor" ? true : false;
    
    const [follow, SetFollow] = useState('Following ');

    const toggleFollow = () => {
        const text =  follow == "Follow " ? "Following " : "Follow " ;
        SetFollow(text);
    }
    const [viewmentor, setmentor] = useState("")
    const [sorted_blogs, setsorted_blogs] = useState("")
    const [sorted_sessions, setsorted_sessions] = useState("")
    const params = useParams()
    const Cid = params.id
    console.log('-------id', Cid)
    let getToken = localStorage.getItem("token");
    const headers = {
      'Authorization': `Token ${getToken}`,
      'Content-Type': 'application/json',
    };
    useEffect(() => {
      axios.get(`http://localhost:8000/api/mentoractivity/${Cid}`, {
        headers
      })
        .then((info) => {setmentor(info.data)}
        )
        .catch((err) => console.log(err))
  },[])



    return (
      
        <div className="background">
            <ProfileBackGround/>
            <ProfileBioCard mentor_info={viewmentor} followState={follow} handlar={toggleFollow}/>
            <BlogsSection mentor_blogs={viewmentor.mentor_blog} mentor_sessions={viewmentor.mentor_session}/>
           
        </div>
    );
}

export default MentorProfile;