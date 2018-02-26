import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class AppFrame extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     open: {false},
  //   }
  // }

  render() {
    return(
      <AppBar>
        <Toolbar>
          <IconButton style={{marginLeft: -12, marginRight:20,}} color='inherit' aria-label='Menu' onClick={this.props.handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit'>Title</Typography>
        </Toolbar>
      </AppBar>
    )
  }
  
}

export default AppFrame;