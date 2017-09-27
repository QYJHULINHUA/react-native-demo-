

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

export default class AnimateView extends Component {
  constructor(props) {
    super(props);

  }
  _onpress(){
  }

  render() {
    return (
      <View>
        <Text
          onPress={this._onpress.bind(this)}
          style={styles.btn}>children
        </Text>

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
    width:200,
    margin: 5,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 5,

 },

});
