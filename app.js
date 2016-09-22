'use strict'

import React, { Component } from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';

const StatusBar    = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem     = require('./components/ListItem');
const styles       = require('./styles.js');

const {
  AppRegistry,
  ListView,
  StyleSheet,
  View, Text,
  TouchableHighlight,
} = ReactNative;

const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyApXE9mupw1aJPQaDL2lsZSjfuvRKmFMT8",
  authDomain: "devdacticfirebase-f8222.firebaseapp.com",
  databaseURL: "https://devdacticfirebase-f8222.firebaseio.com",
  storageBucket: "devdacticfirebase-f8222.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class devdacticFirebase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }]);
      console.log("DataSOURCE::::", dataSource);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />
        <ListView dataSource={this.state.dataSource}
                  renderRow={this._renderItem.bind(this)}
                  style={styles.listView} />
        <ActionButton title="Add"
                      onPress={ () => {} } />
      </View>
    );
  }

  _renderItem(item) {
    return ( <ListItem item={item} onPress={ () => {} } /> )
  };

}
