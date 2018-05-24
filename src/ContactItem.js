import * as React from "react";

export const ContactItem = ({ avatarUrl, name,status,species }) => {
  return (
 
    <div className="col-md-2">
      <img src={avatarUrl} className="img-thumbnail" alt="" />
      <div className="content">
        <h6 className="header">{name}</h6>
        <h6 className="header">status: {status}</h6>
        <h6 className="header">species: {species}</h6>
   
      </div>
    </div>
  );
}

export default ContactItem;