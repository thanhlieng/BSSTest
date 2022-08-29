import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../asset/colors';

export const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: colors.white,
    width: '44%',
    marginHorizontal: '2%',
    borderRadius: 20,
  },
  textName: {
    fontWeight: '800',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
  },
  flipText: {
    fontSize: 11,
    color: 'black',
  },
});
