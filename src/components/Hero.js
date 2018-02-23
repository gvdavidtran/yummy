import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  hero: {
    minHeight: '50vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
});

class Hero extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hero} >
        <Typography variant="headline" color='inherit'>Restaurants</Typography>
        
      </div>
    )
  }
}

export default withStyles(styles)(Hero);