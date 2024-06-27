import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 13,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  cancelBtn: {
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.transparent,
  },
});
