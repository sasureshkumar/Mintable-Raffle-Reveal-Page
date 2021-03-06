import classNames from 'classnames';
import {useDrag} from 'react-dnd';
import type {InterfaceTicket} from '../../models';
import {FC} from "react";

export interface Props extends InterfaceTicket {
    type?: string;
    className?: string;
}

const TicketCard: FC<Props> = ({
                                   available,
                                   id,
                                   name,
                                   type = 'BOX',
                                   image,
                                   className,
                               }) => {
    const [collected, drag, dragPreview]: any[] = useDrag(() => ({
        type,
        item: {id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return collected.isDragging ? (
        <div ref={dragPreview}>
            <div
                className={classNames('flex filter grayscale opacity-50', className)}
            >
                <img src={image} alt={name} className="inline"/>
            </div>
        </div>
    ) : (
        <div ref={drag}>
            <div className={classNames('flex relative  cursor-pointer', className)}>
                <div
                    className="absolute -right-2 -top-2 flex items-center justify-center bg-indigo-600 w-10 h-10 rounded-full shadow text-white font-semibold">
                    {available}
                </div>
                <img src={image} alt={name} className="inline"/>
            </div>
        </div>
    );
}

export default TicketCard;
