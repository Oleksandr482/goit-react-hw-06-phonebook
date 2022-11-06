import React from 'react';
import { FormInput, Label } from 'components/App.styled';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { getFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <FormInput type="text" onChange={onChange} />
    </Label>
  );
};
