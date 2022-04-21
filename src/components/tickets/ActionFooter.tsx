import React, {FC} from "react";
import {InterfaceTicket} from "../../models";
import {SimpleButton} from "../buttons";
import TicketImage from "../../assets/images/ticket.svg";

export interface Props {
    tickets: InterfaceTicket[];
}

const ActionFooter: FC<Props> = ({tickets}) => {
    return (
        <div className="flex justify-between items-center p-6 border-t">
            <div className="flex items-center">
                <img src={TicketImage} alt=""/>
                <div className="ml-3">
                    <h3 className="font-semibold">Draw Tickets</h3>
                    <div>10 Tickets found</div>
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
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            {tickets.map((item: InterfaceTicket) => (
                                <option key={item.id} value={item.id}>{item.name} ({item.available})</option>
                            ))}
                        </select>

                    </div>
                    <div className="w-full">
                        <SimpleButton children="Draw Ticket"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ActionFooter;
