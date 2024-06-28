import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const customModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    backgroundColor: Colors.orange,
    padding: 20,
    borderRadius: 20,
    width: '95%',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  cancelBtnText: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'lightgrey',
    flex: 1,
    alignItems: 'center',
  },
  confirmBtnText: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 3,
    color: Colors.white,
  },
  contentText: {
    alignSelf: 'center',
    fontSize: 15,
    marginVertical: 5,
    color: Colors.white,
  },
  cancelBtn: {
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.transparent,
  },
});
