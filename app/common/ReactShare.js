


import React, { Component } from 'react';
import {
  View,
  // Text,
} from 'react-native';
import PropTypes from 'prop-types';

import ActionSheet from 'react-native-actionsheet'

export default class ReactShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	reactShareRef:null,
    }
    
  }

  static propTypes = {
  	shareHandlePress:PropTypes.func,
  };

  static defaultProps = {
  	shareHandlePress:(idx)=>{
  		console.log('share-idx',idx);
  	}

  };

  
  render() {
    return (
      <View                          // 可动画化的视图组件
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
        <ActionSheet
          ref={o => this.state.reactShareRef = o}
          title='分享到'
          options={[ '取消', '微信好友', '微信朋友圈', 'QQ好友']}
          cancelButtonIndex={0}
          onPress={this.props.shareHandlePress}
        />
      </View>
    );
  }
}

