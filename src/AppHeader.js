import * as React from "react";


export const AppHeader = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="http://localhost:3000/">Rick and Morty</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/">Link</a>
        </li>
        
      </ul>
   
    </div>
  </nav>
  );
};

export default AppHeader;