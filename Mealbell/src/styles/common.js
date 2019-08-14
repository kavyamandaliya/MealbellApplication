import { StyleSheet } from 'react-native';

/**
 * Primary Color Sheet: https://colorhunt.co/palette/151637
 * Secondary Color Sheet:
*/
export const COLORS = {
  BACKGROUNDS: {
    DARK: '#f1f0d1',
    BUTTON: '#aeeff0',
  },
  BORDERS: {
    BUTTON: '#daa592',
  },
  TEXTS: {
    DARK: '#4e3440',
  },
};

export const SIZES = {
  BORDERS: {
    small: 1,
    large: 2,
  },
  MARGINS: {
    normal: 20,
  },
  PADDING: {
    normal: 8,
  },
  FONTS: {
    normal: 22,
  },
  WIDTHS: {
    normal: '75%',
    full: '100%',
  },
};

export const CommonStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUNDS.DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    marginBottom: SIZES.MARGINS.normal,
    width: '100%',
  },
  buttonText: {
    color: COLORS.TEXTS.DARK,
    fontSize: SIZES.FONTS.normal,
  },
  inputText: {
    height: 40,
    backgroundColor: '#fff',
    fontSize: SIZES.FONTS.normal,
    marginBottom: SIZES.MARGINS.normal,
  },
  question: {
    color: COLORS.TEXTS.DARK,
    fontSize: SIZES.FONTS.normal,
    marginBottom: SIZES.MARGINS.normal,
  },
});
