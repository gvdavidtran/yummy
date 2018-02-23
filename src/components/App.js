import React from 'react';
 import { withStyles } from 'material-ui/styles';
// import Typography from 'material-ui/Typography';
import AppFrame from './AppFrame';
import Hero from './Hero';
import RestaurantCard from './RestaurantCard';
import restoData from '../restaurants-menus/restaurants-list';
import MenuItem from './MenuItem';
import List from 'material-ui/List';
import regineMenu from '../restaurants-menus/regine-menu';


const styles = theme => ({
  main: {
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  restaurantsGrid: {
    minHeight: '300px',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class App extends React.Component {
  constructor(){
    super();
    this.loadMenu = this.loadMenu.bind(this);
    this.state = {
      restaurants: restoData,
      selectedRestaurant: {},
      menu: {},
    };
  }

  loadMenu() {
    this.setState({
      selectedRestaurant: {},
      menu: regineMenu,
    })
  }

  // getRestaurantName() = (restaurantName) => {}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppFrame></AppFrame>
        <Hero />
        <div className={classes.main}>
          <div className={classes.restaurantsGrid}>
            {Object
              .keys(this.state.restaurants)
              .map(key => <RestaurantCard 
                key={key} 
                index={key} 
                details={this.state.restaurants[key]} 
                loadMenu={this.loadMenu} 
                getRestaurantName={this.getRestaurantName}  />) 
            }
          </div>
          <List>
            {
              Object
                .keys(this.state.menu)
                .map(key => <MenuItem key={key} details={this.state.menu[key]} />)
            }
          </List>
        </div>
        
        
      </div>
    );
  }
  
}

export default withStyles(styles)(App);
