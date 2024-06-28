import React, {useState} from 'react';
import {ListRenderItemInfo, Text, View} from 'react-native';
import {styles} from './Contacts.styles';
import SearchBar from '../../components/searchBar/SearchBar';
import {Contact} from '../../utils/types';
import {ContactView} from '../../components/contact/ContactView';
import {CustomDialog} from '../../components/customDilaog/CustomDialog';
import ContactForm from '../../components/addContactForm/ContactForm';
import {useContactListContext} from '../../context/ContactContext';
import {Strings} from '../../utils/strings';
import {ActionTypes} from '../../utils/data';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../utils/colors';

type Props = {};

export const Contacts: React.FC<Props> = () => {
  const [showContactForm, setShowContactForm] = useState(false); // For visiblity of adding and editing contact form
  const [isShowWarningModal, setIsShowWarningModal] = useState(false); // For showing warning dialog while deleting a contact
  const [contactToTakeAction, setContactToTakeAction] = useState<{
    contact: Contact;
    action: string;
  }>(); // Object specifying type of action(edit/delete) to be taken on a specific contact

  const {
    data: contactList,
    handleSearch,
    deleteContact,
  } = useContactListContext();

  // Reset state of screen
  const resetActionData = () => {
    setIsShowWarningModal(false);
    setShowContactForm(false);
    setContactToTakeAction(undefined);
  };

  // Retrieves action buttons for editing or deleting a contact when swiping a contact
  const renderHiddenItem = (
    data: ListRenderItemInfo<Contact>,
    _rowMap: RowMap<Contact>,
  ) => {
    return (
      <View style={styles.hiddenContainer}>
        <AntDesign
          name="edit"
          color={Colors.white}
          size={25}
          onPress={() => {
            setContactToTakeAction({
              contact: data.item,
              action: ActionTypes.edit,
            });
            setShowContactForm(true);
          }}
        />
        <AntDesign
          name="delete"
          color={Colors.white}
          size={25}
          onPress={() => {
            setContactToTakeAction({
              contact: data.item,
              action: ActionTypes.delete,
            });
            setIsShowWarningModal(true);
          }}
        />
      </View>
    );
  };

  // Renders contact view
  const renderContact = (item: Contact) => {
    return <ContactView contact={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>{Strings.CONTACTS}</Text>
        <AntDesign
          name="adduser"
          color={Colors.white}
          size={25}
          onPress={() => {
            setShowContactForm(true);
          }}
        />
      </View>
      <SearchBar onSearch={handleSearch} />
      {contactList?.filteredContacts?.length ? (
        <SwipeListView
          data={contactList?.filteredContacts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderContact(item)}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={120}
          disableLeftSwipe={true}
          closeOnRowBeginSwipe
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
