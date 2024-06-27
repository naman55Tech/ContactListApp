import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './Contacts.styles';
import SearchBar from '../../components/searchBar/SearchBar';
import {Contact} from '../../utils/types';
import {ContactView} from '../../components/contact/ContactView';
import {sampleContacts} from '../../utils/data';
import {sortContactsList} from '../../utils/utils';
import {CustomDialog} from '../../components/customDilaog/CustomDialog';
import AddContactForm from '../../components/addContactForm/AddContactForm';

type Props = {};

export const Contacts: React.FC<Props> = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    const sortedContacts = sortContactsList(sampleContacts);
    setContacts(sortedContacts);
    setFilteredContacts(sortedContacts); // Initialize filteredContacts with all contacts
  }, []);

  const renderContact = (item: Contact) => {
    return <ContactView contact={item} />;
  };

  const handleSearch = (query: string) => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredContacts(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contacts</Text>
      <SearchBar
        onSearch={handleSearch}
        onOptionClick={() => {
          setIsShowModal(true);
        }}
      />
      {filteredContacts.length ? (
        <FlatList
          data={filteredContacts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderContact(item)}
        />
      ) : (
        <Text style={styles.noContactText}>No Contacts Found</Text>
      )}
      <CustomDialog visible={isShowModal} title="Add Contact">
        <AddContactForm onCancel={() => setIsShowModal(false)} />
      </CustomDialog>
    </View>
  );
};
