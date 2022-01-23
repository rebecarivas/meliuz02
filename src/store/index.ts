import {createStore} from 'redux';

import getToken from './modules/auth/reducer';

const store = createStore(getToken);

export default store;