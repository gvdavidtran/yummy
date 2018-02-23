import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { formatPrice } from '../helpers';
import Typography from 'material-ui/Typography'


class MenuItem extends React.Component {

  render() {
    const { details } = this.props;
    return(
      <div>
        <ListItem button>
          <ListItemText 
            primary={details.name}
            secondary={
            <Typography variant="caption">
              <span className="price">{formatPrice(details.price)}</span> -- {details.desc}
            </Typography>
          }
          />
        </ListItem>
        <Divider inset={true} />
      </div>
    )
  }
}

export default MenuItem;