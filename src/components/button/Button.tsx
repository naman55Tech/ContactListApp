import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './Button.styles';

type props = {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

export const Button: React.FC<props> = ({
  title,
  onPress,
  containerStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
