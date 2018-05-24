import * as React from "react";
import { ContactsList } from "./ContactsList";
import { AppHeader } from "./AppHeader";
import { Pages } from "./Pages";
import { SelectList } from "./SelectList";

export class App extends React.Component {
  state = {
    contacts: null
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }));
  }

  render() {
    const contacts = this.state.contacts;

    return (
      <div>
        <AppHeader />
        <SelectList />
        <main className="ui main text container">
          {contacts ? <ContactsList contacts={contacts} /> : 'Ładowanie…'}
        </main>
        <Pages />
      </div>
    );
  }
}

export default App;