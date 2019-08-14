import React, { useState } from 'react';
import { Notifications } from 'expo';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { onBackPress } from '../../utils/hooks';
import { CommonStyles, SIZES } from '../../styles/common';
import { Button } from '../Button';
import { IosBackButton } from '../IosBackButton';
import { addItem } from '../config';
import { getQueryParameter } from '../../utils/routes';

const NOTIFICATION = {
  title: 'Hello',
  body: 'World',
};

export function SchedulePage(props) {
  const [name, setName] = useState('');
  const { location: { search } } = props;

  const meal = getQueryParameter(search, 'meal');

  onBackPress(() => {
    props.history.push('/Alarms');
  });

  return (
    <View style={CommonStyles.pageContainer}>
      <View style={styles.inContainer}>
        <IosBackButton/>
        <Text style={CommonStyles.question}>
          What time do you want to have {meal}?
        </Text>
        <TextInput style={CommonStyles.inputText}
          placeholder="Type the time here!"
          value={name}
          onChangeText={(newText) => setName(newText)}
        />
        <Button style={CommonStyles.button} onPress={() => {
          addItem(name);
          setName('');
          Notifications.scheduleLocalNotificationAsync(NOTIFICATION, {
            time: new Date().getTime() + 5000,
            repeat: 'minute',
          });
        }}>
          <Text style={CommonStyles.buttonText}>Remind me</Text>
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
