import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import CommonStyles from '../styles/CommonStyles';
import Icon from '@expo/vector-icons/FontAwesome';
import { setUserInfo } from '../../redux/actions/userAction';

const IntroOne = ({ navigation, dispatch }) => {
  const onGenderPressed = gender => {
    dispatch(setUserInfo({ gender }));
    navigation.navigate('IntroProfile');
  };
  return (
    <View style={CommonStyles.normalSinglePage}>
      <View style={CommonStyles.introPageTextBox}>
        <Image
          style={{ width: 180, height: 120, resizeMode: 'contain', marginBottom: 30 }}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={CommonStyles.introHeading}>Which one are you ?</Text>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 30 }}>
          <TouchableOpacity
            style={CommonStyles.genderBox}
            onPress={() => onGenderPressed('female')}
          >
            <Icon name="female" size={60} color="black" style={{ paddingBottom: 10 }} />
            <Text style={CommonStyles.itemText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CommonStyles.genderBox} onPress={() => onGenderPressed('male')}>
            <Icon name="male" size={60} color="black" style={{ paddingBottom: 10 }} />
            <Text style={CommonStyles.itemText}>Male</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default connect(null)(IntroOne);
