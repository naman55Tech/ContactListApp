import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './Contacts.styles';
import SearchBar from '../../components/searchBar/SearchBar';
import {Contact} from '../../utils/types';
import {ContactView} from '../../components/contact/ContactView';
import {CustomDialog} from '../../components/customDilaog/CustomDialog';
import AddContactForm from '../../components/addContactForm/AddContactForm';
import {useContactListContext} from '../../context/ContactContext';
import {Strings} from '../../utils/strings';

type Props = {};

export const Contacts: React.FC<Props> = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const {data, handleSearch} = useContactListContext();

  const renderContact = (item: Contact) => {
    return <ContactView contact={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Strings.CONTACTS}</Text>
      <SearchBar
        onSearch={handleSearch}
        onOptionClick={() => {
          setIsShowModal(true);
        }}
      />
      {data?.filteredContacts?.length ? (
        <FlatList
          data={data?.filteredContacts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderContact(item)}
        />
      ) : (
        <Text style={styles.noContactText}>{Strings.NO_CONTACT_FOUND}</Text>
      )}
      <CustomDialog visible={isShowModal} title={Strings.ADD_CONTACT}>
        <AddContactForm onCancel={() => setIsShowModal(false)} />
      </CustomDialog>
    </View>
  );
};
