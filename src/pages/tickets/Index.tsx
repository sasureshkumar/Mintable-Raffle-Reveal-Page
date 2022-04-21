import type {FC} from "react";
import {InterfaceTicket} from "../../models";
import {SimpleButton} from "../../components/buttons";

const tickets: InterfaceTicket[] = [];

const Index: FC = () => {
    return (
        <div className="bg-gray-50 flex flex-1 flex-col lg:flex-row lg:p-8 p-2 sm:p-4">
            <div className="bg-white shadow rounded w-full lg:w-1/6">
                <div className="flex justify-between lg:p-4 p-1 sm:p-2 border-b items-center">
                    <h2 className="font-semibold">Get More Tickets</h2>
                    <div className="ml-3">
                        <SimpleButton children="Buy"/>
                    </div>
                </div>
                <div className="p-3 lg:p-10 flex flex-row lg:flex-col items-center">
                    {tickets.map((item: InterfaceTicket) => (
                        <div></div>
                    ))}
                </div>
            </div>
            <div className="flex-1 flex flex-col lg:ml-3 bg-white shadow rounded order-first md:order-last">
                Droppable area
            </div>
        </div>
    );
};

export default Index;
