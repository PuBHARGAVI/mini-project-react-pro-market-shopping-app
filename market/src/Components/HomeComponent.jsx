import React from "react";
import service from "./Service";
class HomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsdata: service.apidata,
      fruitsdata: [],
      vegetablesdata: [],
      nutsdata: [],
    };
  }
  componentDidMount() {
    var fruitsList = [];
    var nutsList = [];
    var vegetablesList = [];
    var items = this.state.itemsdata;
    for (var i = 0; i < items.length; i++) {
      if (items[i].category === "vegetables") {
        vegetablesList.push(items[i]);
      } else if (items[i].category === "fruits") {
        fruitsList.push(items[i]);
      } else if (items[i].category === "nuts") {
        nutsList.push(items[i]);
      }
    }
    this.setState({
      fruitsdata: fruitsList,
      vegetablesdata: vegetablesList,
      nutsdata: nutsList,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="market-container">
          {this.state.vegetablesdata.map((vegetable) => (
            <div id="item-container">
              <img id="image" src={vegetable.image} alt=""></img>
              {vegetable.name}
              Rs{vegetable.price}
              <div id="button-container">
                <button>+</button>
                <input type="text"></input>
                <button>-</button>
              </div>
            </div>
          ))}
        </div>
        )
      </React.Fragment>
    );
  }
}
export default HomeComponent;
