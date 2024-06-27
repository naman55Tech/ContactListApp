import {Contact} from './types';

export const sortContactsList = (contacts: Contact[]) => {
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};
