import React, { Fragment } from 'react'

function Profilecard(props) {
   let{name,avatar_url , bio, html_url} = props.profile;
  return (
    <Fragment>
    <div className="card">
      <img src={avatar_url} alt="" className="img-fluid" />
      <div className="card-body">
         <h5 className="card-title">{name}</h5>
        <p>{bio}</p>
        <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-success btn-sm">profile</a>
      </div>

    </div>
    
    </Fragment>
  )
}

export default Profilecard;
