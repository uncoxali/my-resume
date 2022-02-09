import React, { FC, ReactNode } from 'react';

export interface WorkIExprienceItemProps {
    date: string;
    location: string;
    children?: ReactNode;
    title?: string;
    subTitle?: string;
    description?: string;
}

const WorkIExprienceItem: FC<WorkIExprienceItemProps> = ({
    children,
    date,
    location,
    title,
    subTitle,
    description,
}) => {
    return (
        <div className=" flex w-full  flex-col print:flex-row md:flex-row">
            <div className=" prose w-full py-6  print:w-1/4 print:justify-center print:p-4 print:pr-8 md:w-1/4 md:justify-center  md:p-4 md:pr-8">
                <h4>{date}</h4>

                <h4>{location}</h4>
            </div>

            <div className="w-full border-gray-200 print:w-3/4  print:border-l print:pl-8 md:w-3/4 md:border-l  md:pl-8">
                <div className="prose">
                    <div className="w-full">
                        <h3 className="leading-snugish mb-2 text-lg font-semibold text-gray-700">
                            {title}
                            <br />
                            <small>{subTitle}</small>
                        </h3>
                    </div>
                    <div className="mt-2.1 text-md mb-2 leading-normal text-gray-700">
                        {description}
                    </div>
                </div>
                {children && children}
            </div>
        </div>
    );
};

export default WorkIExprienceItem;
