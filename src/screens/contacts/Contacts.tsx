import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './Contacts.styles';
import SearchBar from '../../components/searchBar/SearchBar';
import {Contact} from '../../utils/types';
import {ContactView} from '../../components/contact/ContactView';
import {CustomDialog} from '../../components/customDilaog/CustomDialog';
import ContactForm from '../../components/addContactForm/ContactForm';
import {useContactListContext} from '../../context/ContactContext';
import {Strings} from '../../utils/strings';
import {ActionTypes} from '../../utils/data';

type Props = {};

export const Contacts: React.FC<Props> = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isShowWarningModal, setIsShowWarningModal] = useState(false);
  const [contactToTakeAction, setContactToTakeAction] = useState<{
    contact: Contact;
    action: string;
  }>();

  const {data, handleSearch, deleteContact} = useContactListContext();

  const resetActionData = () => {
    setIsShowWarningModal(false);
    setShowContactForm(false);
    setContactToTakeAction(undefined);
  };

  const renderContact = (item: Contact) => {
    return (
      <ContactView
        contact={item}
        onDeletePress={(contact, action) => {
          setContactToTakeAction({contact, action});
          setIsShowWarningModal(true);
        }}
        onEditPress={(contact, action) => {
          setContactToTakeAction({contact, action});
          setShowContactForm(true);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Strings.CONTACTS}</Text>
      <SearchBar
        onSearch={handleSearch}
        onOptionClick={() => {
          setShowContactForm(true);
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

      <CustomDialog
        visible={showContactForm}
        title={
          contactToTakeAction?.action === ActionTypes.edit
            ? Strings.EDIT_CONTACT
            : Strings.ADD_CONTACT
        }>
        <ContactForm
          onCancel={resetActionData}
          contactToTakeAction={contactToTakeAction}
        />
      </CustomDialog>

      <CustomDialog
        visible={isShowWarningModal}
        title={Strings.DELETE_CONTACT}
        content={Strings.CONFIRM_DELETE}
        cancelBtnText={Strings.CANCEL}
        confirmBtnText={Strings.DELETE}
        onCancel={resetActionData}
        onConfirm={() => {
          if (contactToTakeAction) {
            deleteContact(contactToTakeAction.contact);
          }
          resetActionData();
        }}
      />
    </View>
  );
};
