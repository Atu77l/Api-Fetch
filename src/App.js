import React from "react";
import "./App.css"


class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://api.tvmaze.com/shows")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
  
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
      
		<div className = "App">
			<h1> Fetch data from an api in react </h1>
      <h1>Detail of Tv Shows</h1> 
      {
				items.map((item) => (
				 <div class="main">
          <h3 class="card-title">{item.id}</h3>
          <h4 class="card-title">{item.name}</h4>
          <h4 class="card-title">{item.genres}</h4>
          <h4 class="card-title">{item.types}</h4>
          <h4 class="card-title">{item.runtime}</h4>
          <h4 class="card-title">{item.premiered}</h4>
          <h4 class="card-title">{item.image.original}</h4>
		  <h4 class="card-title">{item.summary}</h4>
		  <img src={item.image.original} className="image" alt="Images absent"/>
		  
          <a href="https://api.tvmaze.com/shows/{item.id}" class="btn btn-primary">Link Of TvShows</a>
          </div>
				))
			}
      

		</div>
	);
}
}

export default App;
