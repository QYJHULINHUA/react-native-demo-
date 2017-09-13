

import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/page/demo_root'
import bannerDemo from './app/page/demo_banner'
import ModelDemo from './app/page/mode_Modal'

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  bannerDemo: { screen: bannerDemo },
  ModelDemo: { screen: ModelDemo},
});
