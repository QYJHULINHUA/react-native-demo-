
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Dimensions,
  DatePickerAndroid,
  Platform,
} from 'react-native';

const {width} = Dimensions.get('window');
// import {dataTransform} from '../common/commonMethod'

export default class DatePickerDemo extends Component {

  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);
    this._clickPress = this._clickPress.bind(this);

    this.state = {
      date: this.props.date,
      dateString: dataTransform(this.props.date,'yyyy-MM-dd'),
    }

  }

  static defaultProps = {
    date: new Date(),
  }

  updateDate(date) {
    this.setState({
        date: date,
        dateString: dataTransform(date,'yyyy-MM-dd'),
    })
  }

  async _clickPress(){

    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: this.props.date,
        maxDate:this.props.date,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        let newdata = new Date(year,month,day);
        let newdataStr = dataTransform(newdata,'yyyy-MM-dd')

        this.setState({
          dateString:newdataStr,
        })
      }
    }
    catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
            日期：<Text style={{color:'red'}}>{this.state.dateString}</Text>
        </Text>


        <View>
          {
            Platform.OS === 'ios'?
            <DatePickerIOS
              style={{width:width,height:200}}
               date={this.state.date}
               mode={'date'}
               minuteInterval={1}
               maximumDate={this.props.date}
               onDateChange={(date) => this.updateDate(date)}
             />:<Text style={styles.btn} onPress={this._clickPress}> 选择日期 </Text>
          }

        </View>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
   margin: 10,
   backgroundColor: "#3B5998",
   color: "white",
   padding: 10
 },

});

function dataTransform(date,fmt) {

  var o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
