import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), name: name, number: number },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const setFilterValue = value => {
  return {
    type: 'filter/setFilterValue',
    payload: value,
  };
};
