import {Contact} from './types';

// Retrieves contacts sorted alphabetically by name.
export const sortContactsList = (contacts: Contact[]) => {
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};
