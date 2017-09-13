
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Banner from '../banner/banner'

const dataList = [
    {
      "img" : "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3413953738,1102676238&fm=200&gp=0.jpg",
      "title" : "你那一笑倾国倾城"
    },
    {
      "img" : "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2344518468,3052832983&fm=26&gp=0.jpg",
      "title" : "那里记录了最唯美的爱情故事"
    },
    {
      "img" : "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1381471869,537167883&fm=200&gp=0.jpg",
      "title" : "我怎么是一个剩女"
    },
    {
      "img" : "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2615553309,1722257899&fm=26&gp=0.jpg",
      "title" : "生命中最后的四分钟"
    },
    {
      "img" : "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2494637734,2622956535&fm=28&gp=0.jpg",
      "title" : "我们都需要治疗"
    }
  ];

export default class bannerDemo extends Component {

  onPageClick(idx){
    console.log('current _ idx ',idx);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>

          <Banner
           imgArr={dataList}
           figureHeight={240}
           dotPlace='center'
           dotDefaultColor="white"
           dotSelectedColor="red"
           dotRadius={5}
           dotMargin={5}
           dotParentStyle={{paddingLeft:10}}
           isHasDotBackground={true}
           dotBackgroundHeight={30}
           dotBackgroundColor="#55555599"
           autoTime={2000}
           isAutoPlay={true}
           onPageClick={this.onPageClick}
           isHasTitle={true}
           titleStyle={{color:'orange',fontSize:12,fontWeight:'400',paddingRight:10}}
       />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
