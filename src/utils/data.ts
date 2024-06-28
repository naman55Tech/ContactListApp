import {ActionType, Contact} from './types';

export const sampleContacts: Contact[] = [
  {
    id: 1,
    phone: '+1234567890',
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'John Doe',
  },
  {
    id: 2,
    phone: '+1987654321',
    email: 'jane.smith@example.com',
    address: '456 Oak Ave, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Jane Smith',
  },
  {
    id: 3,
    phone: '+1122334455',
    email: 'michael.johnson@example.com',
    address: '789 Elm St, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Michael Johnson',
  },
  {
    id: 4,
    phone: '+1555666777',
    email: 'susan.williams@example.com',
    address: '321 Pine St, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Susan Williams',
  },
  {
    id: 5,
    phone: '+1444333222',
    email: 'robert.brown@example.com',
    address: '654 Maple Ave, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Robert Brown',
  },
  {
    id: 6,
    phone: '+1999888777',
    email: 'lisa.davis@example.com',
    address: '987 Cedar St, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Lisa Davis',
  },
  {
    id: 7,
    phone: '+1888777666',
    email: 'david.moore@example.com',
    address: '456 Birch Ave, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'David Moore',
  },
  {
    id: 8,
    phone: '+1777666555',
    email: 'emily.wilson@example.com',
    address: '789 Walnut St, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Emily Wilson',
  },
  {
    id: 9,
    phone: '+1666555444',
    email: 'matthew.taylor@example.com',
    address: '123 Spruce Ave, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Matthew Taylor',
  },
  {
    id: 10,
    phone: '+1333444555',
    email: 'jennifer.thomas@example.com',
    address: '987 Pinecone St, Springfield',
    avatar: 'https://picsum.photos/200/200',
    name: 'Jennifer Thomas',
  },
];

export const ActionTypes: ActionType = {
  edit: 'EDIT',
  delete: 'DELETE',
};
