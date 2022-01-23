
   
import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

import IsAuth from '../../components/IsAuth';

const Dash: React.FC = () => {
  return (
    <View style={styles.default}>
      <IsAuth />
      <Text>Dash</Text>
    </View>
  );
};

export default Dash;

const styles = StyleSheet.create({
  default: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});