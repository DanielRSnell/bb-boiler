import { StatusBar } from "expo-status-bar";
import React from "react";
import { get } from "lodash";
import { connect, Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import configureStore from "./src/store/configureStore";
import { getActivityDetail } from "./src/redux/actions/ActivityAction";
import {
  getMembers,
  getMembersDetails
} from "./src/redux/actions/MemberAction";

const store = configureStore();

class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount = async () => {
    await this.props.getActivityDetail();
    await this.props.getMembers();
    await this.props.getMembersDetails();
  };

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
    activity: get(state, "Activity.activity", false),
    members: get(state, "Member.members", false),
    membersDetails: get(state, "Member.memberDetails", false)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActivityDetail: () => dispatch(getActivityDetail()),
    getMembers: () => dispatch(getMembers()),
    getMembersDetails: () => dispatch(getMembersDetails())
  };
}

const AppMain = connect(mapStateToProps, mapDispatchToProps)(App);

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
