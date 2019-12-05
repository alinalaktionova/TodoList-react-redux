import { createStore} from 'redux';
import rootReducer from './reducers/index';

const configureStore = (preloadedState: any) => (
    createStore(
        rootReducer,
        preloadedState
    )
);

const store = configureStore({});


export default store;