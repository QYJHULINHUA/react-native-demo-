
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';


const {width} = Dimensions.get('window');


export default class DemoWebApi extends Component {

  constructor(props) {
    super(props);

    this.objDataIdx = 0;

    this.state = {

    }

  }

  static defaultProps = {
  }

  _clickBtn(btnStr:string){

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
        <View style={{flex:1,}}>
          <Text/>
        
          {this._renderBtn("微信登录")}
          {this._renderBtn("微信分享")}
          {this._renderBtn("微信支付")}

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
