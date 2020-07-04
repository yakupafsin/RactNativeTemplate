
import React from "react";
import {Share, Linking, Platform, View, Text, Button, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

////import Share from 'react-native-share';


class Detay extends React.Component {

  


  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('gelen', '-'),
      
    };
  };



  


  render() {

    const { navigation } = this.props;
   
    return (
      <View style={{ flex: 1 }}>
        



      </View>
    );
  }
}

export default Detay;