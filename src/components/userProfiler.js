import React from 'react'
import ProfileCard from './profilecard'
import UserInfo from './userinfo';

function UserProfiler(props) {
  return (
    <div>
    <div className="container">
     <div className="row">
        <div className="col md-3"> 
        {
          Object.keys(props).length !== 0 ? 
          <ProfileCard profile={props.profile}/> : null
         }   
        </div>
        <div className="col md-9">
        {
          Object.keys(props).length !== 0 ? 
          <UserInfo profile={props.profile}/> : null
         } 
        </div>
        </div>
        </div>
    </div>
  )
}

export default UserProfiler
