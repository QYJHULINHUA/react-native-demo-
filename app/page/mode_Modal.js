
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import Modal from 'react-native-modalbox';


export default class ModelDemo extends Component {

  constructor(){
    super();
    this.state={
      swipeToClose: true,
      isDisabled: false,
    }
  }

  _openModel(btnStr){
    this.refs[btnStr].open()
  }

  _closeModel(btnStr){
    this.refs[btnStr].close()
  }

  _renderBtutton(btnStr:string){
    return (
      <Text
        style={{height:25}}
        onPress={()=>{
          this._openModel(btnStr)
        }}
        >
          {btnStr}
      </Text>
    )

  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }


  render() {
    return (
      <View style={styles.container}>

        {this._renderBtutton('Basic_modal')}
        {this._renderBtutton('Position_top')}
        {this._renderBtutton('Position_centered_backdrop_disable')}
        {this._renderBtutton('Modal_with_keyboard_support')}

        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"Basic_modal"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
            <Text style={styles.text}>Basic modal</Text>
            <Text
              onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})}
              style={styles.btn}
              >
                能否滑动关闭({this.state.swipeToClose ? "可以" : "不可以"})
            </Text>

        </Modal>

        <Modal
          ref={"Position_top"}
          style={[styles.modal, styles.modal2]}
          swipeToClose={true}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}
          entry='top'
          backdropOpacity={0.1}
          backdropColor='red'
          backButtonClose={true}
          position={"top"}
          >
          <Text style={[styles.text, {color: "white"}]}>Modal on top</Text>
          <Text
            onPress={() => this._closeModel('Position_top')}
            style={styles.btn}
            >
              点击关闭
          </Text>
        </Modal>

        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"Position_centered_backdrop_disable"}
          isDisabled={this.state.isDisabled}>
          <Text style={styles.text}>Position_centered_backdrop_disable</Text>
          <Text
            onPress={() => this.setState({isDisabled: !this.state.isDisabled})}
            style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})
          </Text>
        </Modal>

        <Modal
          ref={"Modal_with_keyboard_support"}
          style={[styles.modal, styles.modal4]}
          position={"bottom"}>
          <View>
            <TextInput style={{height: 50, width: 200, backgroundColor: '#DDDDDD'}}/>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  btn: {
   margin: 10,
   backgroundColor: "#3B5998",
   color: "white",
   padding: 10
 },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    // height: 230,
  },
  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },
  modal3: {
   height: 300,
   width: 300
 },
 modal4: {
    height: 300
  },
});
