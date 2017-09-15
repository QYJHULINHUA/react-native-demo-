

import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/page/demo_root'
import bannerDemo from './app/page/demo_banner'
import ModelDemo from './app/page/mode_Modal'
import BaiduMap from './app/page/demo_baiduMap.js'
import DatePickerDemo from './app/page/demo_datePicker'


export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  bannerDemo: { screen: bannerDemo },
  ModelDemo: { screen: ModelDemo},
  BaiduMap:{screen:BaiduMap},
  DatePickerDemo:{screen:DatePickerDemo},
});
