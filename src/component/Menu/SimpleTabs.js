import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MyProfile from './MyProfile'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 7,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
         <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="HOME" />
            <Tab label="MATCHES" />
            <Tab label="INBOX" />
            <Tab label="SEARCH" />
            <Tab label="UPGRADE" />
            <Tab label="HELP" />
            <Tab label="NOTIFICATION" />
            <Tab label="PROFILE" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>HOME</TabContainer>}
        {value === 1 && <TabContainer>MATCHES</TabContainer>}
        {value === 2 && <TabContainer>INBOX</TabContainer>}
        {value === 3 && <TabContainer>SEARCH</TabContainer>}
        {value === 4 && <TabContainer>UPGRADE</TabContainer>}
        {value === 5 && <TabContainer>HELP</TabContainer>}
        {value === 6 && <TabContainer>NOTIFICATION</TabContainer>}
        {value === 7 && <MyProfile />}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs)