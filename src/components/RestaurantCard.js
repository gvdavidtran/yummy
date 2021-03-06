import React from 'react';
import Button from 'material-ui/Button';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
//import Paper from 'material-ui/Paper'



const styles = {
  media: {
    height: 200,
    minWidth: 250,
  }
}

class RestaurantCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newRestaurant = this.props.details.name;
    this.props.getRestaurantName(newRestaurant);
  }

  render(){
    const { details, classes } = this.props;

    return (
      <Button onClick={() => this.handleClick()} >
        <Card>
          <CardMedia
            className={classes.media}
            image={details.img}
            title={details.name}
          />
          <CardContent>
            <Typography variant="headline">
              {details.name}
            </Typography>
          </CardContent>
        </Card>
      </Button>
    )
  }
  
  
}

export default withStyles(styles)(RestaurantCard);