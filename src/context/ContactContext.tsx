import React, {useContext, useEffect, useState} from 'react';
import {Contact} from '../utils/types';
import {sampleContacts} from '../utils/data';
import {sortContactsList} from '../utils/utils';
export type ContactData = {
  filteredContacts: Contact[];
};
export type ContactListContextValue = {
  setFilteredContacts?: React.Dispatch<React.SetStateAction<ContactData>>;
  data?: ContactData;
  addContact: (contact: Contact) => void;
  handleSearch: (query: string) => void;
  deleteContact: (contact: Contact) => void;
  editContact: (contact: Contact) => void;
};
export const ContactListContext = React.createContext(
  {} as ContactListContextValue,
);

type Props = React.PropsWithChildren<{
  value?: ContactListContextValue;
}>;

export const ContactListProvider = ({children, value}: Props) => {
  const [contacts, setContacts] = useState<Contact[]>(
    sortContactsList(sampleContacts),
  );
  const [data, setFilteredContacts] = useState({...value?.data});

  useEffect(() => {
    setFilteredContacts({filteredContacts: contacts});
  }, [contacts]);

  const addContact = (contact: Contact) => {
    const updatedData = [...contacts, contact];
    setContacts(sortContactsList(updatedData));
  };

  const handleSearch = (query: string) => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredContacts({filteredContacts: sortContactsList(filtered)});
  };

  const deleteContact = (contact: Contact) => {
    const updatedData = contacts.filter(c => c.id !== contact.id);
    setContacts(sortContactsList(updatedData));
  };

  const editContact = (contact: Contact) => {
    const updatedData = contacts.map(c => (c.id === contact.id ? contact : c));
    setContacts(sortContactsList(updatedData));
  };

  const contactListContext = {
    data,
    addContact,
    handleSearch,
    setFilteredContacts,
    deleteContact,
    editContact,
  };

  return (
    <ContactListContext.Provider
      value={contactListContext as ContactListContextValue}>
      {children}
    </ContactListContext.Provider>
  );
};

export const useContactListContext = () => useContext(ContactListContext);
