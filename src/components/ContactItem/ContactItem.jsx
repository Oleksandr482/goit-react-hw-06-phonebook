import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { Btn, ListItem, P } from 'components/App.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ListItem>
        <P>
          {contact.name}: {contact.number}
        </P>
        <Btn
          type="button"
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </Btn>
      </ListItem>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
