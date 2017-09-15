
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
      {key:'4',title:'444'},
      {key:'5',title:'555'},
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
