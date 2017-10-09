
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  NativeModules,
} from 'react-native';

var ModuleDemoA = NativeModules.ModuleDemoA;




const {width} = Dimensions.get('window');


export default class DemoIosModule extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  _clickBtn(btnStr:string){
    if (btnStr === '请输出我的名字') {
      ModuleDemoA.printMyname('隔壁','小胡')
    }

  }

  _renderBtn(btnStr:string){
    return(
      <Text
        onPress={()=>{
          this._clickBtn(btnStr);
        }}
        style={styles.btn}>
        {btnStr}
      </Text>
    )
  }

  


  render() {
    return (
      <View style={styles.container}>
      <View>
        {this._renderBtn("请输出我的名字")}
      </View>
        
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#F5FCFF',

  },
  btn: {
    margin: 5,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 5,

 },

});
