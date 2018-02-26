import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

class ResponsiveDrawer extends React.Component {
  render() {
    const drawerList = (
      <div>
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
      </div>
    )


    return (
      <Drawer variant="temporary" open={this.props.open}>
        <div>
          {drawerList}
        </div>
      </Drawer>
    )
  }
}

export default ResponsiveDrawer;