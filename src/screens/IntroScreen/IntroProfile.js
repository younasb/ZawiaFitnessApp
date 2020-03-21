import * as React from 'react';
import { View, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import Carousel from 'react-native-snap-carousel';
import { colors, fontFamily } from '../styles/variables';

const _renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 10,
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <Image source={item.photo} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          justifyContent: 'center',
          zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.5)',
          paddingBottom: 20,
          width: '100%',
          height: 40,
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: colors.white,
            fontFamily: fontFamily.medium,
            paddingTop: 16,
          }}
        >
          {item.name}
        </Text>
      </View>

      <View
        style={{
          position: 'relative',
          bottom: 40,
          height: 40,
          overflow: 'hidden',
          marginBottom: -40,
        }}
      >
        <Image
          blurRadius={10}
          source={item.photo}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: -5,
          }}
        />
      </View>
    </View>
  );
};
const IntroProfile = ({ navigation }) => {
  const entries = [
    {
      name: 'Younes',
      photo: require('../../assets/images/faceco/younes.jpeg'),
    },
    {
      name: 'Fadil',
      photo: require('../../assets/images/faceco/fadil.jpeg'),
    },
  ];
  return (
    <View style={CommonStyles.normalSinglePage}>
      <View style={CommonStyles.introPageTextBox}>
        <Image
          style={{ width: 180, height: 120, resizeMode: 'contain', marginBottom: 30 }}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={CommonStyles.introHeading}>Choose your profile ?</Text>
        <View style={{ marginTop: 60 }}>
          <Carousel
            // layout={'tinder'}
            layoutCardOffset={`9`}
            data={entries}
            renderItem={_renderItem}
            sliderWidth={500}
            itemWidth={200}
          />
        </View>
      </View>
    </View>
  );
};
export default IntroProfile;
