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
import santaBarbaraMenu from '../restaurants-menus/santabarbara-menu';
import Drawer from 'material-ui/Drawer';
import { ListItem, ListItemText } from 'material-ui/List';
// import ResponsiveDrawer from "./ResponsiveDrawer";



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
  drawerPaper: {
    width: '250px',
  }
});

class App extends React.Component {
  constructor(){
    super();
    this.loadMenu = this.loadMenu.bind(this);
    this.getRestaurantName = this.getRestaurantName.bind(this)
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.state = {
      restaurants: restoData,
      selectedRestaurant: {},
      menu: {},
      open: false,
    };
  }

  handleDrawerToggle() {
    this.setState({ open: !this.state.open });
  }

  loadMenu() {
    let selectedMenu = this.state.menu
    switch(this.state.selectedRestaurant){
      case "Regine Cafe":
        selectedMenu = regineMenu;
        break;
      case "Santa Barbara":
        selectedMenu = santaBarbaraMenu
        break;
      default:
        selectedMenu = ""
    }
    this.setState({ menu: selectedMenu })
  }

  getRestaurantName(restaurantName) {
    let selectedRestaurant = this.state.selectedRestaurant;
    console.log('Previous selectedRestaurant: ' + selectedRestaurant)
    selectedRestaurant = restaurantName;
    console.log('New selectedRestaurant: ' + selectedRestaurant)
    this.setState({ selectedRestaurant }, () => this.loadMenu())
  }

  render() {
    const drawerList = (
      <List>
        <ListItem>
          <ListItemText 
            primary= "One" />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary= "Two" />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary= "Three" />
        </ListItem>
      </List>
    )

    const { classes } = this.props;
    return (
      <div>
        <AppFrame handleDrawerToggle={this.handleDrawerToggle} />
        <Hero />
        <Drawer variant="temporary" open={this.state.open} onClose={this.handleDrawerToggle} classes={{paper: classes.drawerPaper}} >
          <div>
            {drawerList}
          </div>
        </Drawer>
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
