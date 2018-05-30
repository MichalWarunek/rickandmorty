import * as React from "react";
import { ContactsList } from "./ContactsList";
import { AppHeader } from "./AppHeader";
import { SelectList } from "./SelectList";
import Pages from './Pages';



export class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    contacts: [],

  }
  }

  loadContactsFromServer(){
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }))
      .catch((error) => {
        console.error(error);
    });
  }

  componentDidMount() {
    this.loadContactsFromServer();
  }


  
  render() {
    const contacts = this.state.contacts;

    return (
      <div>
        <AppHeader />
        <SelectList />
        <main className="ui main text container">
          {/* {contacts ? <ContactsList contacts={contacts} /> : 'Loading...'} */}
        
      <Pages contacts={contacts} /> 
       
      </main>
     
      </div>
    );
  }
}

export default App;