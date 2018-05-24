import * as React from "react";
import { ContactItem } from "./ContactItem";


export class ContactsList extends React.Component {

  

  contactToContactItem = contact => {
    const avatarUrl = contact.image;
    const { name, status, species } = contact;
    const key = contact.id;
    return <ContactItem key={key} avatarUrl={avatarUrl} name={name} status={status} species={species}/>;
  };

 
  render() {
    return (
    <div className="container">
    <div className="row">
        {this.props.contacts.map(this.contactToContactItem)}
    </div>
    </div>
    );
  }
}

export default ContactsList;