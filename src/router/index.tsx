import type {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from "react";

import WrapperLayout from "../layouts/WrapperLayout";

const TicketIndex = lazy(() => import("../pages/tickets/Index"));

const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<WrapperLayout/>}>
                <Route index element={<Suspense fallback={<div>Loading...</div>}>
                    <TicketIndex/>
                </Suspense>}/>
            </Route>
        </Routes>
    );
};

export default Router;
