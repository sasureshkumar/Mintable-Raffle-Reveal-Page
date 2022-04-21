import classNames from 'classnames';
import type {ReactNode} from 'react';
import {FC} from "react";

export interface Props {
    actionType?: string;
    disabled?: boolean;
    children: ReactNode;
}

const SimpleButton: FC<Props> = ({actionType = 'constructive', disabled = false,children}) => {
    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(
                'disabled:opacity-50 disabled:cursor-not-allowed w-full text-center items-center px-3 py-3 border border-transparent text-xs font-medium rounded shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ',
                {
                    'bg-red-600 hover:bg-red-700 focus:ring-red-500': actionType === 'destructive',
                    'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500':
                        actionType === 'constructive',
                },
            )}
        >
            {children}
        </button>
    );
}

export default SimpleButton;
