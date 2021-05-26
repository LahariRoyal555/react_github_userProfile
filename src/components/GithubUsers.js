import React, { Fragment,useState} from 'react'
import UserProfiler from "./userProfiler";
import Axios from "axios";
import {clientId,  clientSecret } from "./GithubCredentials";
import GithubRepos from "./GithubRepos"
function GithubUsers() {
    const[userName , setUserName] = useState("");
    const[profile , setProfile] = useState(null);
    const[repos , setRepos] = useState([]);
 
    const updateUserName = (e) => {
     
       setUserName(e.target.value);
      

    }

    const searchUser = (e) =>{
      e.preventDefault();
      searchUserProfile();
      searchUserRepos();
    }
    const searchUserProfile = () =>{
      Axios.get(`https://api.github.com/users/${userName}?clientId=${clientId}&clientSecret=${clientSecret}`)
      .then((response) => {
           setProfile(response.data)
      }).catch((err) => {
        console.log(err);
      })

    }
    const searchUserRepos = () =>{
      Axios.get(`https://api.github.com/users/${userName}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
      .then((response) => {
           setRepos(response.data)
      }).catch((err) => {
        console.log(err);
      })

    }

   return (
    <Fragment>

      <div className="container mt-4">
         <div className="row">
             <div className="col">
               <div className="card">
                  <div className="card-header bg-secondary text-white">
                     <h3>Let's find the Github Users profiles</h3>
                  </div>
                      <div className="card-body">
                      <form className="form-inline" onSubmit={searchUser}>
                      <div className="form-group"> 
                       <input 
                       size="40" 
                       type="text" 
                       value={userName}
                       onChange={updateUserName}
                       className="form-control"
                       placeholder="user Name" />
                      </div>
                      <div>
                      <input type="submit" value="search" className="btn bg-secondary text-white btn-sm mt-2"/>
                      </div>
                      </form>
                 </div>

              </div>
            </div>
        </div>
    
    </div>
    <div className="container mt-3">
      <div className="row">
       <div className="col">
       {
          profile ? <UserProfiler profile={profile}/> :null

       }
       </div>  
    </div>
    </div>
    <div className="container mt-3">
     <div className="row" >
       <div className="col">
       {
      repos ? <GithubRepos repos={repos}/> :null

       }    

     
        </div>
     
     </div>
    
    </div>
    </Fragment>
  )
}

export default GithubUsers;
