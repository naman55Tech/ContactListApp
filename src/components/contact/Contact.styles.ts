import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: Colors.darkBlack,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  subDetailContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    marginLeft: 15,
  },
  image: {height: 40, width: 40, borderRadius: 20, marginEnd: 20},
  name: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
  address: {
    color: Colors.gray,
    fontWeight: '500',
    fontSize: 10,
  },
  subDetail: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 10,
  },
  nameContainer: {
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  horizontal: {
    height: 1,
    backgroundColor: Colors.lightWhite,
  },
});
