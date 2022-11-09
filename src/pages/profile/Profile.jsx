import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import logo from "./profile.jpg";


function Profile() {
  
  const { username } = useParams();

  if (username !== localStorage.getItem("current-user")) {
      return <h1>{`Please do the login`}</h1>;
  }

  return ProfilePage();
}
function ProfilePage() {

  return (
    <>
      <UpperPage/>
      <EditProfile/>
    </>
  );
  }
  function UpperPage() {
    
  return (
    <>
    <div className="profile">
    <img id="logo" src={logo}/>
    <h2> UserName </h2>
    </div>
    </>
    )
  }
  function EditProfile(props){
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    const { onClick} = props;
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    const showOrHide2 = () => setShowElement(false)
    
    return(
      <>
       <div className="button" >
       <button className="edit-profile-btn" onClick={showOrHide}>Edit Profile</button>
        {showElement ? edit() : null }
    </div>
    </>)
  
    function edit(){
      
      function handleChange(event){
        event.preventDefault();
        let username = event.target.username.value;
        setText(username);
      }
      
      function addItem(event){
        showOrHide2();
        event.preventDefault();
        setItems([...items, text])
      }
    return(
      <>
      <div className="Edit">
        <scan>
        <h3>Name:<input onChange={handleChange} type = "text" name="username"/></h3>
        <h3>Email:<input onChange={handleChange} type = "text" name="email"/></h3>
        <h3>Password:<input onChange={handleChange} type = "text" name="password"/></h3>
        <h3>Profile Picture:<input type ="file"/></h3>
        </scan>
      </div>
      <div className="editButton">
      <button className="edit-profile-btn" onClick={addItem}>Save</button> 
      </div>
      </>)
    }
  }

export { Profile };