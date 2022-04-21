import storage from 'redux-persist/lib/storage';

const persistenceConfig = {
    key: 'root',
    version: 1,
    storage,
};

export default persistenceConfig;
