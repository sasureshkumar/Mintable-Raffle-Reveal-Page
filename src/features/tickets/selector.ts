import {createDraftSafeSelector} from '@reduxjs/toolkit';
import type {InterfaceTicket} from '../../models';
import type {State} from '../../store';

const ticketState: any = (state: State) => state.tickets;

export const getTicketsSelector = createDraftSafeSelector(
    ticketState,
    (state) => state.tickets
);

export const getActiveTicketSelector = createDraftSafeSelector(
    ticketState,
    (state) => state.tickets.find((i: InterfaceTicket) => i.id === state.activeId)
);
