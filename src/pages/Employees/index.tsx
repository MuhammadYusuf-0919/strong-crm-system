import CrudTable from '@/modules/CrudTable';
import Employee from '@/modules/FormFields/Employees';

function Employees() {
  const captions: string[] = [
    'Name',
    'Job',
    // 'Email',
    'Address',
    'Contact',
    'Age',
  ];

  const entity = 'employees';
  const endpoint = 'employees';

  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Employee Panel';
  const dataTableTitle = 'Employee Lists';
  const entityDisplayLabels = ['email'];

  const ADD_NEW_ENTITY = 'Add new employee';
  const DATATABLE_TITLE = 'Employees List';
  const ENTITY_NAME = 'admin';
  const CREATE_ENTITY = 'Create employee';
  const UPDATE_ENTITY = 'Update employee';
  const initialState = {
    age: '',
    job: '',
    name: '',
    email: '',
    address: '',
    contact: '',
  };
  const config = {
    entity,
    endpoint,
    captions,
    PANEL_TITLE,
    ENTITY_NAME,
    searchConfig,
    initialState,
    CREATE_ENTITY,
    UPDATE_ENTITY,
    ADD_NEW_ENTITY,
    dataTableTitle,
    DATATABLE_TITLE,
    crudForm: Employee,
    entityDisplayLabels,
  };
  return <CrudTable config={config} />;
}

export default Employees;
