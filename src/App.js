import * as React from "react";
import { AppHeader } from "./AppHeader";
import { SelectList } from "./SelectList";
import Pages from './Pages';
 


export class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    contacts: [],
    query: "https://rickandmortyapi.com/api/character/?page=2"

  }
  }



  loadContactsFromServer(){
    fetch(this.state.query)
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
        <SelectList contacts={contacts}/>
        <main className="ui main text container">
          {/* {contacts ? <ContactsList contacts={contacts} /> : 'Loading...'} */}
        
      <Pages  /> 
           
      </main>
     
      </div>
    );
  }
}

export default App;