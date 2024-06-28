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
  error: {
    color: Colors.gray,
    marginBottom: 5,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});
