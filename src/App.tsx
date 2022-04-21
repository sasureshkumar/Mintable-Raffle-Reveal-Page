import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Router from './router';
import store, {persistenceStore} from './store';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistenceStore}>
                <DndProvider backend={HTML5Backend}>
                    <HelmetProvider>
                        <Helmet>
                            <html/>
                            <title>Raffle Reveal Page - Mintable</title>
                        </Helmet>
                        <BrowserRouter>
                            <Router/>
                        </BrowserRouter>
                    </HelmetProvider>
                </DndProvider>
            </PersistGate>
        </Provider>
    )
}
