import * as React from 'react';
import { View, Image, Text } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import { Button } from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';

export default function IntroOne({ navigation }) {
  return (
    <View style={CommonStyles.normalSinglePage}>
      <View style={CommonStyles.introPageTextBox}>
        <Image
          style={{ width: 230, height: 180, resizeMode: 'contain' }}
          source={require('../../assets/images/logo.png')}
        />

        <Text style={CommonStyles.introHeading}>Welcome to Zawia Fitness App.</Text>
        <Text style={CommonStyles.introPageSubText}>One way to keep trak to Insanity workout</Text>

        <Image
          style={{ width: 300, height: 200 }}
          source={require('../../assets/lottie/17511-warm-up-guy-gympass.gif')}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 80
        }}
      >
        <Button
          title="Let's get it started "
          type="solid"
          containerStyle={{ minWidth: 220 }}
          buttonStyle={{ borderRadius: 20 }}
          icon={<Icon name="flag-checkered" size={15} color="white" style={{ paddingRight: 20 }} />}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('IntroTwo');
          }}
        />
      </View>
    </View>
  );
}
