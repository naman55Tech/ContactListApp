import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './TextInput.styles';
import {Colors} from '../../utils/colors';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  ref?: any;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  ref,
  ...rest
}) => {
  return (
    <>
      <TextInput
        ref={ref}
        placeholderTextColor={Colors.white}
        style={styles.input}
        placeholder={label}
        {...rest}
      />
    </>
  );
};

export default CustomTextInput;
