import React, { FC, ReactElement, ReactNode } from 'react';

interface Props {
    icon: ReactElement;
    title: string;
    children: ReactNode;
}
const Card: FC<Props> = ({ children, icon, title }) => {
    return (
        <div className=" relative my-2 flex h-full flex-col justify-start border-t-2  border-gray-700 p-4  print:px-0">
            <div className="absolute -top-6 left-0 flex  items-center bg-white  py-2 px-4  font-bold capitalize">
                {icon}
                {title}
            </div>
            {children}
        </div>
    );
};

export default Card;
