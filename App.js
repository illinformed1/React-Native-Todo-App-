import React, { Component } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ScrollView
} from "react-native";
import styled from "styled-components";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      todoitems: ["walk the dog", "smoke a bong"],
      userInput: ""
    };
  }

  handleChange = e => {
    this.setState({ userInput: e });
  };

  onPress = () => {
    this.setState(prev => {
      return {
        count: this.state.count + 1,
        todoitems: [...prev.todoitems, this.state.userInput]
      };
    });
  };

  render() {
    return (
      <Stylized>
        {/*-- Container that holds the count-- */}
        <View style={styles.countContainer}>
          {/*-- Container that holds the count text-- */}
          <Text style={styles.countText}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
        <ScrollView>
          <ToDosContainer>
            {this.state.todoitems.map(item => (
              <ToDos item={item} />
            ))}
            {/* ---- Touchable-Highlight Button ----*/}
          </ToDosContainer>
        </ScrollView>
        <FlexRow>
          <UserInput onChangeText={this.handleChange} />
          <TouchableHighlight
            underlayColor="aqua"
            style={styles.button}
            onPress={this.onPress}
          >
            {/*----the text inside the Touchable-Highlight button ----*/}
            <Text> + </Text>
            {/*--- End of Touchable-Highlight button ---*/}
          </TouchableHighlight>
        </FlexRow>
        <View style={styles.countContainer}>
          {/*-- Container that holds the count text-- */}
          <Text style={styles.countText}>{this.state.userInput}</Text>
        </View>
      </Stylized>
    );
  }
}

const ToDos = ({ item }) => {
  return (
    <ToDosWrapper>
      <ToDoItem>{item}</ToDoItem>
      <Delete>Delete</Delete>
    </ToDosWrapper>
  );
};

const UserInput = styled.TextInput`
  width: 80%;
  background: white;
`;
const Delete = styled.Text`
  align-self: center;
`;
const Stylized = styled.View`
  display: flex;
  background-color: #53acef;
  height: 100%;
`;
const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 4%;
  height: 9%;
  align-items: center;
  width: 95%;
`;

const ToDosWrapper = styled.View`
  border: 2px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ToDosContainer = styled.View`
  width: 100%;
  height: 1000%;
  display: flex;
  background-color: white;
`;

const ToDoItem = styled.Text`
  background-color: white;
  text-align: center;
  width: 100%;
  padding: 4px;
`;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "orange"
  },
  button: {
    alignItems: "center",
    backgroundColor: "grey",
    width: "10%"
  },
  countContainer: {
    alignItems: "center",
    padding: 40
  },
  countText: {
    color: "black"
  }
});
