import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '../Button';
import { onBackPress } from '../../utils/hooks';
import { CommonStyles, SIZES } from '../../styles/common';
import { IosBackButton } from '../IosBackButton';
import { addItem } from '../config';

export function AddMealPage(props) {
  const [name, setName] = useState('');

  onBackPress(() => {
    props.history.push('/');
  });

  const handleSubmit = () => {
    addItem(name);
    setName('');
  };

  return (
    <View style={CommonStyles.pageContainer}>
      <View style={styles.innerContainer}>
        <IosBackButton/>
        <Text style={CommonStyles.question}>What did you make today?</Text>
        <TextInput
          style={CommonStyles.inputText}
          placeholder="Type the food here!"
          value={name}
          onChangeText={(newText) => setName(newText)}
        />
        <Button style={CommonStyles.button}
          onPress={this.handleSubmit}
        >
          <Text style={CommonStyles.buttonText}>Add</Text>
        </Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: SIZES.WIDTHS.normal,
  },
});
