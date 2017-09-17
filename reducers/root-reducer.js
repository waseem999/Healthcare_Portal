import React from 'react';
import { combineReducers } from 'redux'
import patients from './patients';
import user from './user';

export default combineReducers({patients, user});