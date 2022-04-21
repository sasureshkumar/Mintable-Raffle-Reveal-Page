import classNames from 'classnames';
import type {ReactNode} from 'react';
import {FC} from "react";

export interface Props {
    status?: string;
    children: ReactNode;
}

const SimpleButton: FC<Props> = ({status = 'primary', children}) => {
    return (
        <button
            type="button"
            className={classNames(
                'w-full text-center items-center px-3 py-3 border border-transparent text-xs font-medium rounded shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ',
                {
                    'bg-red-600 hover:bg-red-700 focus:ring-red-500': status === 'destructive',
                    'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500':
                        status === 'primary',
                }
            )}
        >
            {children}
        </button>
    );
}

export default SimpleButton;
