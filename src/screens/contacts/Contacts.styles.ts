import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlack,
    height: '100%',
  },
  heading: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 20,
  },
  noContactText: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
    fontSize: 20,
  },
});
