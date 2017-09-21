
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';


const {width} = Dimensions.get('window');


export default class DemoImageCache extends Component {

  constructor(props) {
    super(props);

    this.objDataIdx = 0;

    this.state = {

    }

  }

  static defaultProps = {
  }

  _clickBtn(btnStr:string){
    console.log(Image);
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
          {this._renderBtn("图片1")}
          {this._renderBtn("图片2")}
          {this._renderBtn("图片3")}
          {this._renderBtn("图片4")}
          {this._renderBtn("图片5")}
        </View>
        <View style={{flex:3,justifyContent:'center',alignItems:'center',}}>
          <Image
            onLoad={()=>{
              console.log('onLoad');
            }}
            onLoadEnd={()=>{
              console.log('onLoadEnd');
            }}
            onError={()=>{
              console.log('onError');
            }}
            source={{uri:'https://gitee.com/uploads/99/1105799_GJhulinhua.png?1503279747'}}
            style={{width:200,height:200}}/>
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
