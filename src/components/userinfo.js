import React ,{Fragment} from 'react'

function userInfo(props) {
   let {followers, following , public_repos ,name, email, location ,bio,html_url} = props.profile

  return (
   <Fragment>
     <div className="card-header bg-light">
       <span className="badge bg-primary mx-2">Followers{followers}</span>
       <span className="badge bg-success mx-2">Repos{public_repos}</span>
       <span className="badge bg-warning mx-2">Following{ following}</span>
     </div>
     <div className="card-body"> 
     <ul className="list-group">
       <li className="list-group-item">
         UserName: {name}
       </li>   
       <li className="list-group-item">
   {bio}
 </li> 
       <li className="list-group-item">
     Location: {location} 
     </li>    
     <li className="list-group-item">
     Email :{email}
   </li>    
       
   <li className="list-group-item">
    profile URL : {html_url}
 </li> 
 </ul>
  </div>
   
   </Fragment>
  )
}

export default userInfo
