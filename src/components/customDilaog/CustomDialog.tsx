import React from 'react';
import {View, Modal, TouchableOpacity, Text} from 'react-native';
import {customModalStyles} from './CustomDialog.styles';
import {Button} from '../button/Button';
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
              <Button
                onPress={onCancel}
                title={cancelBtnText ?? ''}
                containerStyle={customModalStyles.cancelBtn}
                titleStyle={{color: Colors.white}}
              />
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
