import React, { FC } from 'react';

export interface SkillItemProps {
    title: string;
    subTitle?: string;
}

const SkillItem: FC<SkillItemProps> = ({ title, subTitle }) => {
    return (
        <div className="w-full py-6 text-center text-lg print:w-1/4 md:w-1/4">
            <p className="text-gray-650  leading-normal">
                {title}
                <br />
                {subTitle && <small className="font-bold text-gray-800">{subTitle}</small>}
            </p>
        </div>
    );
};

export default SkillItem;
