
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,

} from 'react-native';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);



  }
  static navigationOptions = {
    title: 'demo 集合',
  };

  _onPressItem(keyStr:string){
    const { navigate } = this.props.navigation;

    if (keyStr === 'banaer轮播图') {

      navigate('bannerDemo');
    }else if (keyStr === 'pop Modal') {

      navigate('ModelDemo');
    }else if (keyStr === '百度地图') {

      navigate('BaiduMap');
    }else if (keyStr === 'DatePicker') {
      navigate('DatePickerDemo')
    }else if (keyStr === '数据类型判断及判空') {
      navigate('DemoJudgment')
    }else if (keyStr === '图片做本地缓存') {
      navigate('DemoImageCache')
    }
    else if (keyStr === '微信SDK') {
      navigate('DemoWebApi')
    }
    else if (keyStr === 'demo8_reactNative动画') {
      navigate('AnimateView');
    }else if (keyStr === 'demo9_ios原生模块') {
      navigate('DemoIosModule');
    }

    console.log(keyStr);
  }

  _renderItem = (item) => (
    <TouchableHighlight
      onPress={()=>{
        this._onPressItem(item.item.title);
      }}>
      <View style={styles.cellContainer}>
        <Text style={{left:16}}>{item.item.title}</Text>
      </View>
    </TouchableHighlight>


  );


  render() {
    let listData = [
      {key:'1',title:'banaer轮播图'},
      {key:'2',title:'pop Modal'},
      {key:'3',title:'百度地图'},
      {key:'4',title:'DatePicker'},
      {key:'5',title:'数据类型判断及判空'},
      {key:'6',title:'图片做本地缓存'},
      {key:'7',title:'微信SDK'},
      {key:'8',title:'demo8_reactNative动画'},
      {key:'9',title:'demo9_ios原生模块'},
    ]
    return (
      <View>
        <FlatList
        data={listData}
        renderItem={this._renderItem}
      />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cellContainer:{
    height:40,
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#898989',
    backgroundColor:'white'
  },
});
