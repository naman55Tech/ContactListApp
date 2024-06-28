import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlack,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 30,
    marginTop: 40,
    marginVertical: 20,
    alignItems: 'center',
  },
  heading: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: '700',
  },
  noContactText: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
    fontSize: 20,
  },
  hiddenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 30,
    marginLeft: 30,
  },
});
