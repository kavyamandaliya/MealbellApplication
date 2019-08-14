import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '../../styles/common';

export function Button(props) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(props.style || {}),
      }}
      onPress={() => props.onPress && props.onPress()}
    >
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.BACKGROUNDS.BUTTON,
    borderColor: COLORS.BORDERS.BUTTON,
    borderStyle: 'solid',
    borderWidth: SIZES.BORDERS.small,
    borderRadius: 10,
    padding: SIZES.PADDING.normal,
  },
});
