import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { onBackPress } from '../../utils/hooks';
import { CommonStyles, SIZES } from '../../styles/common';
import { Button } from '../Button';
import { IosBackButton } from '../IosBackButton';
import { addItem } from '../config';

export function EditPage(props) {
  const [name, setName] = useState('');

  onBackPress(() => {
    props.history.push('/');
  });

  return (
    <View style={CommonStyles.pageContainer}>
      <View style={styles.inContainer}>
        <IosBackButton/>
        <Text style={CommonStyles.question}>
          What food do you want to try later?
        </Text>
        <TextInput style={CommonStyles.inputText}
          placeholder="Type the food here!"
          value={name}
          onChangeText={(newText) => setName(newText)}
        />
        <Button style={CommonStyles.button} onPress={() => {
          addItem(name);
          setName('');
        }}>
          <Text style={CommonStyles.buttonText}>Add</Text>
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
