import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: Colors.red,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  subDetailContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 15,
  },
  image: {height: 40, width: 40, borderRadius: 20, marginEnd: 20},
  name: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
  address: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 10,
  },
  subDetail: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 10,
  },
});
