import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { get } from 'lodash';
import { connect, Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './src/store/configureStore';
import { getActivityDetail } from './src/redux/actions/ActivityAction';

const store = configureStore();

class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount = async () => {
    await this.props.getActivityDetail();
  }

  render() {
    console.log(this.props.activity);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: get(state, 'Activity.activity', false),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActivityDetail: () => dispatch(getActivityDetail()),
  };
}


const AppMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppMain />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
