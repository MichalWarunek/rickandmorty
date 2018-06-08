import * as React from "react";

export class Pages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      page: 1,
      numPages:[]

   
    };
    this.handleClick = this.handleClick.bind(this);
  }

  loadContactsFromServer(){
    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
      .then(res => res.json())
      .then(json => this.setState({ characters: json.results, numPages:json.info }))
      .catch((error) => {
        console.error(error);
    });
  }

  componentDidMount() {
    this.loadContactsFromServer();
  }
  
  handleClick(event) {
    this.setState({
      page: Number(event.target.id)
    });
    this.loadContactsFromServer();
  }

  increment=(event)=> {
    if(this.state.page < this.state.numPages.pages)
    this.setState({
      page: this.state.page+1,
    });
    this.loadContactsFromServer();
  }

  decrement=(event)=> {
    if (this.state.page>1)
    this.setState({
       page: this.state.page-1
    });
    this.loadContactsFromServer();
  }
 

  render() {
    const {pages} = this.state.numPages;
    const characters = this.state.characters;

    const renderTodos = characters.map((character, index) => {
      return <div className="col-md-2">
      <img src={character.image} className="img-thumbnail" alt="" />
      <div className="content">
        <h6 className="header">{character.name}</h6>
        <h6 className="header">status: {character.status}</h6>
        <h6 className="header">species: {character.species}</h6>
      
      </div>
    </div>
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }
   
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
        <li className="page-link"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
          
        </li>
        </ul>
        </nav>
      );
    });
    

  return (
    
    <nav aria-label="Page navigation example">
    <div className="container">
      <div className="row">
     
      {renderTodos}
      
      </div>
      </div>
    
  <ul className="pagination justify-content-center">
    <li onClick={this.decrement} className="page-link">
      <a aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
        
      </a>
    </li>
  
    {renderPageNumbers}
   
    
    <li onClick={this.increment} className="page-link">
      <a aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>

  );
}
}

export default Pages;