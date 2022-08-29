import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../asset/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});
