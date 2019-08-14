import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../Button';
import { CommonStyles, SIZES, COLORS } from '../../styles/common';
import { Icon } from 'react-native-elements';

export function HomeScreen(props) {
  return (
    <View style={CommonStyles.pageContainer}>
      <Button
        style={styles.settingButton}
        onPress={() => props.history.push('/alarms')}
      >
        <Icon color={CommonStyles.buttonText.color} name='alarm'/>
      </Button>
      <View style={styles.innerContainer}>
        <Text style={styles.greeting}>Hi there,</Text>
        <Text style={CommonStyles.question}>What do you feel like today?</Text>
        <Button
          style={CommonStyles.button}
          onPress={() => props.history.push('/suggestion')}
        >
          <Text style={CommonStyles.buttonText}>Don't know what to eat</Text>
        </Button>
        <Button style={CommonStyles.button}
          onPress={() => props.history.push('/add')}
        >
          <Text style={CommonStyles.buttonText}>Full</Text>
        </Button>
        <Button
          style={CommonStyles.button}
          onPress={() => props.history.push('/edit')}
        >
          <Text style={CommonStyles.buttonText}>
            Add a dish to wishlist
          </Text>
        </Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  innerContainer: {
    width: SIZES.WIDTHS.normal,
  },
  greeting: {
    ...CommonStyles.question,
    fontSize: SIZES.FONTS.normal,
  },
  settingButton: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    backgroundColor: 'transparent',
  },
  home: {

  },
});
