/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// include connect for App
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { activateGeodX, closeGeodX, } from './redux';


// type Props = {};
// remove 'default' after export:
export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.welcome}
        </Text>
        <Text style={styles.instructions}>
          {this.props.start}
        </Text>
        <Text style={styles.instructions}>
          {this.props.instructions}
        </Text>
        <Button
          onPress={()=>this.props.eventHandlerWithParam('Payload Sent!')}
          // onPress={this.props.eventHandlerNoParam}
          title="Learn More"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// inject app state from redux
const mapStateToProps = (state, ownProps) => {
  console.log('new state Got!');
  // set properties from state
  return {
    welcome: state.welcome,
    start: state.start,
    instructions: state.instructions,
  };
};

// inject UI event handler from actions
// now got property activateGeodP & closeGeodP
const mapDispatchToProps = {
  eventHandlerWithParam: activateGeodX,
  eventHandlerNoParam: closeGeodX,
};

// Wrap App component with Connect component, 
// and create interaction channel(props) for it.
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

