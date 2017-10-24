import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';

import './drawer-menu.css';

const baMuiTheme = getMuiTheme({
  menuItem: {
    // dataHeight: 32,
    // height: 48,
    hoverColor: '#cc7a00',
    // padding: spacing.desktopGutter,
    // selectedTextColor: palette.accent1Color,
    // rightIconDesktopFill: grey600,
  },
  drawer: {
    // width: spacing.desktopKeylineIncrement * 4,
    color: '#FF9900',
  }
})
class DrawerMenuSetup extends Component{
 constructor(props) {
    super(props);
    this.state = {open: false};
    injectTapEventPlugin();
  }
  handleToggle = () => this.setState({open: !this.state.open});
  trigger = () =>{
    console.log('test')
  }

  render() {
    return (
      <div className="header-bar text-right">
        <section className="container">
          <div className="row">
            <div className="col-md-12">
              {/*<IconButton iconClassName="fa fa-bars" onTouchTap={this.handleToggle} style={{color:'#ffffff'}}/>*/}
              <Drawer open={this.state.open}>
                <MenuItem style={{color:'#ffffff'}}>Menu Item</MenuItem>
                <MenuItem style={{color:'#ffffff'}}>Menu Item</MenuItem>
                <MenuItem style={{color:'#ffffff'}}>Menu Item</MenuItem>
              </Drawer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

class DrawerMenu extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={baMuiTheme}>
        <DrawerMenuSetup />
      </MuiThemeProvider>
    );
  }
}

export default DrawerMenu;