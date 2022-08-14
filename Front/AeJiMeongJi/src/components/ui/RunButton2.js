import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';

function RunButton2({children, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default RunButton2;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(7),
    backgroundColor: '#DDB244',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginHorizontal: responsiveWidth(1),
    marginBottom: responsiveHeight(1),
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.btnText,
    fontSize: responsiveFontSize(2.4),
    fontFamily: '강원교육튼튼',
  },
});
