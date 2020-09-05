// import React from "react";
// import axios from "axios";

// // import PlantCard from './PlantCard';

// export default function FilterPlantList (props) {
//   // add state with a property called "plants" - initialize as an empty array
  
//   const [plants, setPlants] = setPlants(props);
 

//   // when the component mounts:
//   //   - fetch data from the server endpoint - http://localhost:3333/plants
//   //   - set the returned plants array to this.state.plants

//   // componentDidMount() {
//   //   axios
//   //     .get('http://localhost:3333/plants')
//   //     .then(response => {
//   //       console.log('PlantList Get Request:', response);
//   //       this.setState({plants: response.data.plantsData})
//   //     })
//   //     .catch(err => {
//   //       console.log('PlantList Get Request Error', err)
//   //     })
//   // }
  
  
//   return (
//     <main className="plant-list">
//       {props.plants.map((plant) => (
//         <div className="plant-card" key={plant.id}>
//           <img className="plant-image" src={plant.img} alt={plant.name} />
//           <div className="plant-details">
//             <h2 className="plant-name">{plant.name}</h2>
//             <p className="plant-scientific-name">{plant.scientificName}</p>
//             <p>{plant.description}</p>
//             <div className="plant-bottom-row">
//               <p>${plant.price}</p>
//               <p>☀️ {plant.light}</p>
//               <p><span aria-label="jsx-a11y/accessible-emoji" role="img" >💦</span> {plant.watering}x/month</p>
//             </div>
//             <button
//               className="plant-button"
//               onClick={() => this.props.addToCart(plant)}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// }




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
  
    console.log('All props from ./App:', this.props);
    console.log('Filter state from ./App:', this.props.filter);

    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
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
        ))}
      </main>
    );
  }
}

