import React, { Fragment } from 'react'

function GithubRepos(props) {
   let reposs = props.repos
  return (
    <Fragment>
    <div className="card">
    <div className="card-header bg-light text-white">
      <h3>Github Repo</h3>
    </div>
    <div className="card-body">
     <ul className="list-group">
        {
          
          reposs.map((repo) => {

         return(
            <li className="list-group-item">
            <a href={repo.html_url} >{repo.name}</a>
            <span className="badge bg-success mx-5" >{repo.stargazers_count}Stars</span>
            <span className="badge bg-warning mx-5">{repo.watchers_count}watches</span>
          </li>
         )
          })
          
      }
     </ul>
     </div>
    </div>
    </Fragment>
  )
}

export default GithubRepos
