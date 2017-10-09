
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

import ReactShare from '../common/ReactShare.js';
import * as WechatAPI from 'react-native-wx';



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

    if (btnStr === '微信分享') {
      this.reactShare.state.reactShareRef.show();
    }
    else if (btnStr === '微信登录') {
      let formData =  { 
          scope: "snsapi_userinfo", // 默认 'snsapi_userinfo'
          state:'123',
        }

        WechatAPI
        .login(formData)
        .then((aaa)=>{
          console.log(aaa);
        })
        .catch((err)=>{
          console.log(err);
        })

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

  _shareHandlePress(idx){


    let formData = {  
        type: 'text', 
        text: "文字内容",
      };

    if (idx === 1) {
      WechatAPI.shareToSession(formData)
    }
    else if (idx === 2) {
      WechatAPI.shareToTimeline(formData)
    }
    else if (idx === 3) {
      
    }
    
  }


  render() {
    return (
      <View style={styles.container}>
        <ReactShare 
          shareHandlePress={this._shareHandlePress}
          ref={o => this.reactShare = o}
          style={{flex:1,}}>
          <Text/>
        
          {this._renderBtn("微信登录")}
          {this._renderBtn("微信分享")}
          {this._renderBtn("微信支付")}

        </ReactShare>

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
