
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import {
  isArray,
  isString,
  isNumber,
  isDate,
  isFunction,
  isObject,
  isNull_Undefined,
  isNotEmptyString,
  isNotEmptyArray,
} from '../common/structureJudgment';

const {width} = Dimensions.get('window');


export default class DemoJudgment extends Component {

  constructor(props) {
    super(props);
    this._renderBtn = this._renderBtn.bind(this);
    this._isArray = this._isArray.bind(this);
    this._isNull_Undefined = this._isNull_Undefined.bind(this);
    this._isString = this._isString.bind(this);
    this._isObject = this._isObject.bind(this);


    this.arrayDataIdx = 0;
    this.nullDataIdx = 0;
    this.stringDataIdx = 0;
    this.objDataIdx = 0;

    this.state = {

    }

  }

  static defaultProps = {
  }

  _isNull_Undefined(){
    let idx = this.nullDataIdx%6;
    let nullTestData ;
    this.nullDataIdx = this.nullDataIdx + 1;
    switch (idx) {
      case 0:
        break;
      case 1:
        nullTestData = null;
        break;
      case 2:
        nullTestData = '';
        break;
      case 3:
        nullTestData = [];
        break;
      case 4:
        nullTestData = {};
        break;
      case 5:
        nullTestData = 'ss';
        break;
      default:

    }
    let isOk = isNull_Undefined(nullTestData);

    console.log(nullTestData , (isOk?'是空':'不是空'));
  }

  _isArray(){

    let idx = this.arrayDataIdx%5;
    this.arrayDataIdx = this.arrayDataIdx + 1;
    let testArr ;
    if (idx === 0) {

    }
    else if (idx === 1) {
      testArr = null;
    }
    else if (idx === 2) {
      testArr = [];
    }
    else if (idx === 3) {
      testArr = {};
    }
    else if (idx === 4) {
      testArr = ['aa','bb'];
    }

    let isOk = isNotEmptyArray(testArr);
    console.log(testArr , (isOk?'是数组':'空数组或者不是数组'));
  }

  _isString(){

    let idx = this.stringDataIdx%5;
    let strTestData ;
    this.stringDataIdx = this.stringDataIdx + 1;
    switch (idx) {
      case 0:

        break;
      case 1:
        strTestData = null;
        break;
      case 2:
        strTestData = '';
        break;
      case 3:
        strTestData = 'aa';
        break;
      case 4:
        strTestData = '  ';
        break;
      default:

    }

    let isOk = isNotEmptyString(strTestData);
    console.log(strTestData , (isOk?'有效字符串':'无效字符串或者不是字符串'));

  }

  _isObject(){

    let idx = this.objDataIdx%7;
    let objTestData ;
    this.objDataIdx = this.objDataIdx + 1;
    switch (idx) {
      case 0:

        break;
      case 1:
        objTestData = null;
        break;
      case 2:
        objTestData = {};
        break;
      case 3:
        objTestData = {key1:'11'};
        break;
      case 4:
        objTestData = '{key1:"11as"}';
        break;
      case 5:
        objTestData = [];
        break;
      case 6:
        objTestData = 12;
        break;
      default:

    }

    let isOk = isObject(objTestData);
    console.log(objTestData , (isOk?'是 Object 类型':'不是 Object 类型'));
  }

  _clickBtn(btnStr:string){
    switch (btnStr) {
      case 'isNull?':
        this._isNull_Undefined();
        break;

      case 'isArray?':
        this._isArray();
        break;

      case 'isString?':
        this._isString();
        break;

      case 'isObject?':
        this._isObject();
        break;
      default:
      console.log('后面的不愿意写了，复制黏贴的东西自己实现去咯');

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
        <View style={{flex:1,}}>
          {this._renderBtn("isNull?")}
          {this._renderBtn("isArray?")}
          {this._renderBtn("isString?")}
          {this._renderBtn("isNumber?")}
          {this._renderBtn("isDate?")}
          {this._renderBtn("isFunction?")}
          {this._renderBtn("isObject?")}
        </View>
        <View style={{flex:2,justifyContent:'center',alignItems:'center',}}/>
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
