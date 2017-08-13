import { combineReducers } from 'redux';
import auth from './auth';
import employeeDetail from './employeeDetail';
import employees from './employees';

export default combineReducers({
  auth,
  employees,
  employeeDetail
});
