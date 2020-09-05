import React, { Component } from "react";
import axios from "axios";

// import PlantCard from './PlantCard';

export default class FilterPlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  
  constructor() {
    super();
    this.state = {
      plants: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then(response => {
        console.log('FilterPlantList Get Request:', response);
        this.setState({plants: response.data.plantsData})
      })
      .catch(err => {
        console.log('PlantList Get Request Error', err)
      })
  }
  
  render() {
  
    // console.log('All props from ./App:', this.props);
    // console.log('FilterWord state from ./App:', this.props.filterWord);

    const items = this.state.plants.filter((data) => {
      if(this.props.filterWord == null) {
        return data
      } else if (data.name.toLowerCase().includes(this.props.filterWord.toLowerCase()) || data.scientificName.toLowerCase().includes(this.props.filterWord.toLowerCase())) {
        return data
      }
      }).map(plant => {
        return (
          <main className="plant-list">
            {/* {this.state?.plants?.map((plant) => ( */}
              <div className="plant-card" key={plant.id}>
                <img className="plant-image" src={plant.img} alt={plant.name} />
                <div className="plant-details">
                  <h2 className="plant-name">{plant.name}</h2>
                  <p className="plant-scientific-name">{plant.scientificName}</p>
                  <p>{plant.description}</p>
                  <div className="plant-bottom-row">
                    <p>${plant.price}</p>
                    <p>☀️ {plant.light}</p>
                    <p>💦 {plant.watering}x/month</p>
                  </div>
                  <button
                    className="plant-button"
                    onClick={() => this.props.addToCart(plant)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            {/* ))} */}
          </main>
        );
      })
      return (
        [items]
      )
  }
}

