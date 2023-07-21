import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

const BackGround = ({children}: any) => {
  return (
    <ImageBackground
      source={require('../assets/image/background.png')}
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default BackGround;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
