import React, { FC } from 'react';

export interface HobiItemProps {
    title: string;
    icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const HobiItem: FC<HobiItemProps> = ({ title, icon: Icon }) => {
    return (
        <div className="flex w-full flex-col items-center justify-center py-6  text-lg print:w-1/4 md:w-1/4">
            {Icon && <Icon className="mx-2 h-7 w-7" />}
            <br />

            {title}
        </div>
    );
};

export default HobiItem;
