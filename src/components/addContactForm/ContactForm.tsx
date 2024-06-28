import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomTextInput from '../textInput/TextInput';
import {styles} from './ContactForm.styles';
import {Button} from '../button/Button';
import {Colors} from '../../utils/colors';
import {useContactListContext} from '../../context/ContactContext';
import {Strings} from '../../utils/strings';
import {Contact} from '../../utils/types';
import {ActionTypes} from '../../utils/data';

type props = {
  onCancel: () => void;
  contactToTakeAction:
    | {
        contact: Contact;
        action: string;
      }
    | undefined;
};

const ContactForm: React.FC<props> = ({onCancel, contactToTakeAction}) => {
  // states for maintaining values of differnet fields
  const [name, setName] = useState(contactToTakeAction?.contact?.name ?? '');
  const [phoneNumber, setPhoneNumber] = useState(
    contactToTakeAction?.contact?.phone ?? '',
  );
  const [email, setEmail] = useState(contactToTakeAction?.contact?.email ?? '');
  const [address, setAddress] = useState(
    contactToTakeAction?.contact?.address ?? '',
  );
  const {addContact, editContact} = useContactListContext();

  // state for maintaining error message
  const [error, setError] = useState('');

  // Reset state when the modal is closed
  const resetState = () => {
    setError('');
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
  };

  const handleSavePressed = () => {
    // Here you can perform actions when the "Add" button is pressed,
    // such as saving the data or navigating to another screen.
    if (!name || !phoneNumber || !email || !address) {
      setError(Strings.REQUIRED_FIELDS);
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError(Strings.INVALID_PHONE_NUMBER);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError(Strings.INVALID_EMAIL);
      return;
    }

    if (contactToTakeAction?.action === ActionTypes.edit) {
      editContact({
        name,
        phone: phoneNumber,
        email,
        address,
        id: contactToTakeAction.contact.id,
        avatar: 'https://picsum.photos/200/200',
      });
    } else {
      addContact({
        name,
        phone: phoneNumber,
        email,
        address,
        id: Math.random(),
        avatar: 'https://picsum.photos/200/200',
      });
    }

    resetState();
    onCancel();
  };

  return (
    <View>
      <Text style={styles.label}>{Strings.NAME_COLON}</Text>
      <CustomTextInput
        label={Strings.ENTER_NAME}
        value={name}
        onChangeText={text => {
          if (error) {
            setError('');
          }
          setName(text);
        }}
      />

      <Text style={styles.label}>{Strings.PHONE_COLON}</Text>
      <CustomTextInput
        label={Strings.ENTER_PHONE}
        keyboardType="phone-pad"
        maxLength={10}
        value={phoneNumber}
        onChangeText={text => {
          if (error) {
            setError('');
          }
          setPhoneNumber(text);
        }}
      />

      <Text style={styles.label}>{Strings.EMAIL_COLON}</Text>
      <CustomTextInput
        label={Strings.ENTER_EMAIL}
        keyboardType="email-address"
        value={email}
        onChangeText={text => {
          if (error) {
            setError('');
          }
          setEmail(text);
        }}
      />

      <Text style={styles.label}>{Strings.ADDRESS_COLON}</Text>
      <CustomTextInput
        label={Strings.ENTER_ADDRESS}
        maxLength={20}
        value={address}
        onChangeText={text => {
          if (error) {
            setError('');
          }
          setAddress(text);
        }}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.btnContainer}>
        <Button title={Strings.SAVE} onPress={handleSavePressed} />
        <Button
          title={Strings.CANCEL}
          onPress={() => {
            resetState();
            onCancel();
          }}
          containerStyle={styles.cancelBtn}
          titleStyle={{color: Colors.white}}
        />
      </View>
    </View>
  );
};

export default ContactForm;
