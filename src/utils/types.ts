export type Contact = {
  id: number;
  phone: string;
  email: string;
  address: string;
  avatar: string;
  name: string;
};

// Defined action types for processing button clicks and other decision makings
export type ActionType = {
  edit: string;
  delete: string;
};
