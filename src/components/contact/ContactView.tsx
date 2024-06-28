import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './Contact.styles';
import {Contact} from '../../utils/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../utils/colors';
import {ActionTypes} from '../../utils/data';

type props = {
  contact: Contact;
  onDeletePress: (contact: Contact, action: string) => void;
  onEditPress: (contact: Contact, action: string) => void;
};

export const ContactView: React.FC<props> = ({
  contact,
  onDeletePress,
  onEditPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{uri: contact.avatar}}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.address}>{contact.address}</Text>
        </View>

        <View style={styles.actionContainer}>
          <AntDesign
            name="edit"
            color={Colors.white}
            size={20}
            onPress={() => onEditPress(contact, ActionTypes.edit)}
          />
          <AntDesign
            name="delete"
            color={Colors.white}
            size={20}
            onPress={() => onDeletePress(contact, ActionTypes.delete)}
          />
        </View>
      </View>

      <View style={styles.subDetailContainer}>
        <AntDesign name="phone" color={Colors.white} size={20} />
        <Text style={styles.subDetail}>{contact.phone}</Text>
      </View>

      <View style={styles.subDetailContainer}>
        <AntDesign name="mail" color={Colors.white} size={20} />
        <Text style={styles.subDetail}>{contact.email}</Text>
      </View>
    </View>
  );
};
