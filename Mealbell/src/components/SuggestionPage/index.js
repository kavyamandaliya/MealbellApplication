import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { onBackPress } from '../../utils/hooks';
import { CommonStyles, SIZES } from '../../styles/common';
import { Button } from '../Button';
import { IosBackButton } from '../IosBackButton';
import { getItems } from '../config';

export function SuggestionPage(props) {
  onBackPress(() => {
    props.history.push('/');
  });

  console.log(getItems());

  return (
    <View style={CommonStyles.pageContainer}>
      <View style={styles.inContainer}>
        <IosBackButton />
        <Text style={CommonStyles.question}>How about some dish...</Text>
        <Button
          style={CommonStyles.button}>
          <Text style={CommonStyles.buttonText}>Find restaurants</Text>
        </Button>
        <Button
          style={CommonStyles.button}>
          <Text style={CommonStyles.buttonText}>Find recipes for it</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inContainer: {
    width: SIZES.WIDTHS.normal,
  },
});
