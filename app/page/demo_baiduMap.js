
import React, {
  Component,
  PropTypes
} from 'react';

import {
  MapView,
  MapTypes,
  Geolocation
} from 'react-native-baidu-map';

import {
  Button,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Dimensions from 'Dimensions';

export default class BaiduMap extends Component {

  constructor() {
    super();

    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 15,
      center: {
        longitude: 113.981718,
        latitude: 22.542449
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [{
        longitude: 113.981718,
        latitude: 22.542449,
        title: "Window of the world"
      },{
        longitude: 113.995516,
        latitude: 22.537642,
        title: "阿怂啊巨大空间的；了"
      }]
    };
  }

  componentDidMount() {
  }

  render() {

    let lat = 31.262587,lng = 121.609851;
    return (
      <View style={styles.container}>
        <MapView
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          marker={this.state.marker}
          markers={this.state.markers}
          style={styles.map}
          onMapDoubleClick={(e)=>{
            console.log('onMapDoubleClick',e);
          }}
          onMapLoaded={(e)=>{
            console.log('onMapLoaded',e);
          }}
          onMarkerClick={(e) => {
            console.log('onMarkerClick',e);
          }}
          onMapPoiClick={(e)=>{
            console.log('onMapPoiClick',e);
          }}
          onMapClick={(e) => {
            console.log('onMapClick',e);

          }}
          onMapStatusChange={(e)=>{
            console.log('jjonMapStatusChange',e);
          }}
        >
        </MapView>

        <View style={styles.row}>
          <Button title="reverseGeoCode" onPress={() => {

            Geolocation.reverseGeoCode(lat,lng)
              .then(data => {
                console.log('reverseGeoCode',data);
              })
              .catch(e =>{
                console.warn(e, 'error');
              })

          }} />
          <Button style={styles.btn} title="reverseGeoCodeGPS" onPress={() => {

            Geolocation.reverseGeoCodeGPS(lat,lng)
              .then(data => {
                console.log('reverseGeoCodeGPS',data);
              })
              .catch(e =>{
                console.warn(e, 'error');
              })

          }} />

          <Button style={styles.btn} title="Locate" onPress={() => {

            Geolocation.getCurrentPosition()
              .then(data => {
                console.log('getCurrentPosition',data);
              })
              .catch(e =>{
                console.warn(e, 'error');
              })
          }} />
        </View>

        <View style={styles.row}>
          <Button title="geocode" onPress={() => {

            Geolocation.geocode('上海市','杨高中路')
              .then(data => {
                console.log('geocode',data);
              })
              .catch(e =>{
                console.warn(e, 'error');
              })

          }} />
          <Button title="废弃按钮" onPress={() => {

          }} />
        </View>

        <View style={styles.row}>
          <Button title="Traffic" onPress={() => {
            this.setState({
              trafficEnabled: !this.state.trafficEnabled
            });
          }} />

          <Button title="Baidu HeatMap" onPress={() => {
            this.setState({
              baiduHeatMapEnabled: !this.state.baiduHeatMapEnabled
            });
          }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
    marginBottom: 16
  }
});
