import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomTextInput from '../textInput/TextInput';
import {styles} from './AddContactForm.styles';
import {Button} from '../button/Button';
import {Colors} from '../../utils/colors';

type props = {
  onCancel: () => void;
};

const AddContactForm: React.FC<props> = ({onCancel}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleAddContact = () => {
    // Here you can perform actions when the "Add" button is pressed,
    // such as saving the data or navigating to another screen.
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Address:', address);

    // Example of clearing inputs after submission (optional)
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
  };

  return (
    <View>
      <Text style={styles.label}>Name:</Text>
      <CustomTextInput
        label="Enter name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <CustomTextInput
        label="Enter phone number"
        keyboardType="phone-pad"
        maxLength={10}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <CustomTextInput
        label="Enter email address"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={styles.label}>Address:</Text>
      <CustomTextInput
        label="Enter address"
        maxLength={20}
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <View style={styles.btnContainer}>
        <Button title="Add" onPress={handleAddContact} />
        <Button
          title="Cancel"
          onPress={() => {
            // Here you can handle cancel action, e.g., navigate back or clear form.
            setName('');
            setPhoneNumber('');
            setEmail('');
            setAddress('');
            onCancel();
          }}
          containerStyle={styles.cancelBtn}
          titleStyle={{color: Colors.white}}
        />
      </View>
    </View>
  );
};

export default AddContactForm;
