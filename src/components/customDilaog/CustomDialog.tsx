import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import {Colors} from '../../utils/colors';

type Props = {
  visible: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  title: string;
  content?: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  titleStyle?: {};
  contentStyle?: {};
  children?: React.ReactNode;
};

export const CustomDialog: React.FC<Props> = ({
  visible,
  title,
  content,
  onCancel,
  onConfirm,
  confirmBtnText,
  cancelBtnText,
  titleStyle,
  contentStyle,
  children,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel ?? onConfirm}>
      <TouchableOpacity
        activeOpacity={1}
        style={customModalStyles.container}
        onPress={onCancel ?? onConfirm}>
        <View style={customModalStyles.innerContainer}>
          <Text style={[customModalStyles.titleText, titleStyle]}>{title}</Text>
          <Text style={[customModalStyles.contentText, contentStyle]}>
            {content}
          </Text>
          {children}
          <View style={customModalStyles.btnContainer}>
            {onCancel && (
              <Button onPress={onCancel} title={cancelBtnText ?? ''} />
            )}
            {onConfirm && (
              <Button onPress={onConfirm} title={confirmBtnText ?? ''} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const customModalStyles = StyleSheet.create({
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
    width: '80%',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  cancelBtnText: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 10,
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
  contentText: {alignSelf: 'center', fontSize: 15, marginVertical: 5},
});
