import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBrown,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: Colors.orange,
    fontSize: 18,
    fontWeight: '600',
  },
});
