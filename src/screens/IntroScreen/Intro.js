import * as React from 'react';
import { View, Text } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import Carousel from 'react-native-snap-carousel';
import { deviceWidth } from '../styles/variables';
import IntrOne from './IntroOne';
import IntroTwo from './IntroTwo';

const _renderItem = ({ item, index }) => {
  if (item.id === 'intro1') return <IntrOne />;
  return <IntroTwo />;
};

export default function Intro() {
  const entries = [
    {
      id: 'intro1',
      title: 'page 1'
    },
    {
      id: 'intro2',
      title: 'page 2'
    }
  ];
  return (
    <View style={CommonStyles.normalSinglePage}>
      <Carousel
        data={entries}
        renderItem={_renderItem}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth}
      />
    </View>
  );
}
