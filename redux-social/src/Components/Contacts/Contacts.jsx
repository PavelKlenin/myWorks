import React from "react";
import s from "./Contacts.module.css";
import Contact from "./Contact";
import * as axios from 'axios';

class Contacts extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => this.props.getContacts(response.data.items));
  }

  loadContacts = () => {
    console.log("Contacts -> loadContacts -> this.props", this.props)
    this.props.getContacts(this.props.users);
  };
  
  
  render() {
    const contactList = this.props.users.map((user) => {
      return <Contact toggleFollow={this.props.toggleFollow} {...user} key={user.id} />
    });

    return (
      <div className={s.contacts}>
        <div className={s.contactList}>{contactList}</div>
        <button className={s.loadContacts} type="button" onClick={this.loadContacts}>
          Load more
        </button>
      </div>
    );
  }
}


export default Contacts;
