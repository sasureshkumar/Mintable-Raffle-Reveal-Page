import React, {FC} from "react";
import {InterfaceTicket} from "../../models";
import {SimpleButton} from "../buttons";
import TicketImage from "../../assets/images/ticket.svg";
import {useDispatch, useSelector} from "react-redux";
import {setActiveId} from "../../features/tickets/slice";
import {getActiveTicketSelector} from "../../features/tickets/selector";

export interface Props {
    tickets: InterfaceTicket[];
}

const ActionBar: FC<Props> = ({tickets}) => {
    const dispatch = useDispatch();

    const activeTicket = useSelector(getActiveTicketSelector);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTicket = tickets.find(ticket => ticket.id === event.target.value);
        if (selectedTicket && selectedTicket.id) {
            dispatch(setActiveId(selectedTicket.id));
        }
    };

    return (
        <div className="flex justify-between items-center p-6 border-t order-last">
            <div className="flex items-center">
                <img src={TicketImage} alt=""/>
                <div className="ml-3">
                    <h3 className="font-semibold">Draw Tickets</h3>
                    {activeTicket && (
                        <div>
                            {(activeTicket ? activeTicket.available : "")}
                            {" "}
                            <span
                                className="text-gray-500">Ticket{(activeTicket.available ? (activeTicket.available > 1 ? "s" : "") : "")} found</span>
                        </div>
                    )}
                    <div>
                        Open your tickets and get a chance to win $1000 worth of high
                        quality NFTs! <a href="#" className="text-indigo-500">Learn More</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-4">
                    <div className="">
                        <select
                            value={activeTicket ? activeTicket.id : ""}
                            onChange={handleSelectChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value="" disabled={true}>Select a card</option>
                            {tickets.map((item: InterfaceTicket) => (
                                <option key={item.id} value={item.id}>{item.name} ({item.available})</option>
                            ))}
                        </select>

                    </div>
                    <div className="w-full">
                        <SimpleButton disabled={!activeTicket} children="Draw Ticket"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ActionBar;
