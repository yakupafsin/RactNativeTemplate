
/**
 *  Paketler
 */
import React from "react";
import { ImageBackground, ScrollView, View, Text, Button, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);


/**
 * SAYFA
 */
class Sayfa2 extends React.Component {

  static navigationOptions = {
    title: 'Sayfa 2',
    headerLeft: () => null,
    titleStyle: {
      textAlign: 'center',
    },
    headerStyle: {
      backgroundColor: '#66bfff',
    },
  };




  render() {
    return (
      <View style={{ flex: 1 }}>



<View style={{ flex: 9, backgroundColor: '#cccccc', alignItems: "center",justifyContent:"center" }}>

<Button onPress={() => this.props.navigation.navigate("Detay", {

  gelen: "Sayfa2 Detay"

})} title={"Detaylar"} />


{/**
 * 
 * SAYFA İÇERİĞİ
 * 
 */}

        </View>



{/***
 * 
 * ALT MENÜ
 * 
 */}
        <View style={{ alignSelf: 'baseline', backgroundColor: 'white',borderTopWidth:5,borderTopColor:"#66bfff", flexDirection: 'row' }}>
          
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Sayfa1")} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 25, height: 25 }} source={require("../icons/company.png")}></Image>
            <Text>Sayfa1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Sayfa2")} style={{ backgroundColor: "#66bfff",  flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 25, height: 25 }} source={require("../icons/job.png")}></Image>
            <Text style={{}}>Sayfa2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Sayfa3")} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 25, height: 25 }} source={require("../icons/cart.png")}></Image>
            <Text>Sayfa3</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default Sayfa2;