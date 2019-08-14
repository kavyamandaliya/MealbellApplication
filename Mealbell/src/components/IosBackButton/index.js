import { Button } from '../Button';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import { CommonStyles } from '../../styles/common';

export function IosBackButton(props) {
  return (
    <View>
      {
        Platform.OS === 'ios' &&
        <Button
          style={CommonStyles.button}
          onPress={() => props.history.push('/')}
        >
          <Text style={CommonStyles.buttonText}>Home</Text>
        </Button>
      }
    </View>
  );
};
