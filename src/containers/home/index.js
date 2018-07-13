import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogBox from '../dialog';
import '../../index.css';

class Home extends Component {

  renderList() {
    return this.props.contact.map((user) => {
      return (
        <li>
          <spam className="data"> {user.name}</spam>
          <spam className="data"> {user.contact}</spam>
        </li>
      );
    })
  }


  render() {
    return (
      <div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Contact</Tab>
              <Tab>Favourate</Tab>
            </TabList>

            <TabPanel>
              <ul>
                {this.renderList()}
              </ul>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
        <div>
          <MuiThemeProvider>
            <DialogBox />
          </MuiThemeProvider>
        </div>
        {/* <button className="addContact">+</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact,
});


export default connect(mapStateToProps)(Home);
