import { Fragment } from 'react';
import ChromIcon from 'assets/svg/chrom.svg';
import EducationIcon from 'assets/svg/education.svg';
import MailIcon from 'assets/svg/mail.svg';
import PhoneIcon from 'assets/svg/phone.svg';
import ProfileIcon from 'assets/svg/profile.svg';
import SkillIcon from 'assets/svg/skillIcon.svg';
import WorkIcon from 'assets/svg/workIcon.svg';
import { Card, HobiItem, SkillItem, WorkIExprienceItem } from 'components/pages/resume';
import { WorkIExprienceItemProps } from 'components/pages/resume/workIExprienceItem';
import Head from 'next/head';
import { hobies, Skills, WorkExprience } from 'statics/data';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ali Mohammadi</title>
            </Head>
            <div className=" w-full bg-gray-200 py-20  print:bg-white print:p-0 ">
                <div className=" mx-auto w-full max-w-screen-xl bg-white p-4 py-10 shadow-sm print:w-full print:max-w-screen-2xl print:p-0  print:shadow-none  md:p-8 md:py-12">
                    <div className=" flex flex-col p-4 px-2 py-10 print:flex-row print:p-0 md:flex-row   md:p-3">
                        <div className=" flex w-full flex-col items-center justify-center p-4 pr-8 print:w-1/4  md:w-1/4 ">
                            <img
                                className="overflow-hidden  bg-gray-300 print:w-4/6 md:w-4/6"
                                src="/Ali-mohammadi.jpg"
                                alt="Ali mohammadi"
                            />
                            <div className="prose-xl w-full py-4 text-center text-xl font-bold  capitalize text-slate-700 ">
                                Ali mohammadi
                            </div>
                        </div>
                        <div className="w-full border-gray-200 print:w-3/4 print:border-l  print:pl-8 md:w-3/4 md:border-l  md:pl-8">
                            <Card title="profile" icon={<ProfileIcon className="mr-2 h-7 w-7" />}>
                                <div>
                                    <h2 className="prose-lg flex w-full items-center px-2 py-10 text-lg text-gray-700 md:w-2/3">
                                        Front End Developer focused on React with 3 years of
                                        experience in building and maintaining web applications.
                                        Proficient in JavaScript, TypeScript, React; plus few other
                                        related libraries.
                                    </h2>
                                    <div className="grid w-full   grid-cols-1 items-center justify-center  gap-4  p-4 md:grid-cols-3">
                                        <a href="tel:+989104866595" className=" flex items-center">
                                            <PhoneIcon className="mx-2 h-7 w-7" />
                                            +989104866595
                                        </a>
                                        <a
                                            href="mailto:alif.mohamady20@gmail.com"
                                            className=" flex items-center"
                                        >
                                            <MailIcon className="mx-2 h-7 w-7" />
                                            alif.mohamady20@gmail.com
                                        </a>
                                        <a
                                            href="https://github.com/uncoxali"
                                            className=" flex items-center"
                                        >
                                            <ChromIcon className="mx-2 h-7 w-7" />
                                            https://github.com/uncoxali
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Card icon={<WorkIcon className="mx-2 h-7 w-7" />} title="Work Experience">
                        <WorkIExprienceItem
                            date="Jan 2020 - May 2021 · 1 yr 5 mos"
                            location="Tehran - Iran"
                            title="Front-end developer"
                            subTitle="Improver Digital"
                        >
                            <div className="pb-10 ">
                                <p className="mt-2.1 text-md mb-2 leading-normal text-gray-700">
                                    Established in 2013 to serve its customers in digital
                                    competition, Improver Digital Technology, with its experienced
                                    and dynamic team that closely follows the trends of the digital
                                    world; It has achieved success in the software industry with the
                                    advanced Android and IOS mobile applications it has developed,
                                    and in the digital advertising industry where it serves as a
                                    Google Partner.
                                </p>
                                <ul className="list-disc pl-8">
                                    <li>
                                        Building stable and maintainable codebases using React and
                                        Next
                                    </li>
                                    <li>
                                        Contributing with backend team, designing database and
                                        structuring infrastructure
                                    </li>
                                    <li>
                                        Developing front-end landing-page, using React.js, Next.js,
                                        Redux.
                                    </li>
                                    <li>
                                        Using skills in debugging to check code, improve code and
                                        enhance the functionality and user experience of web
                                        applications
                                    </li>
                                    <li>Creating custom React.js components and hooks.</li>
                                </ul>
                            </div>
                        </WorkIExprienceItem>
                        {WorkExprience.map((w: WorkIExprienceItemProps, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <WorkIExprienceItem {...w} />
                                </Fragment>
                            );
                        })}
                    </Card>
                    <Card icon={<SkillIcon className="mx-2 h-7 w-7" />} title="Skils">
                        <div className="flex w-full flex-wrap">
                            {Skills.map((skill, idx) => {
                                return (
                                    <Fragment key={idx}>
                                        <SkillItem {...skill} />
                                    </Fragment>
                                );
                            })}
                        </div>
                    </Card>
                    <Card icon={<ProfileIcon className="mx-2 h-7 w-7" />} title="Hobbies">
                        <div className="flex w-full flex-wrap">
                            {hobies.map((hobi, idx) => {
                                return (
                                    <Fragment key={idx}>
                                        <HobiItem {...hobi} />
                                    </Fragment>
                                );
                            })}
                        </div>
                    </Card>
                    <Card
                        icon={<EducationIcon className="mx-2 scale-150 transform" />}
                        title="Education"
                    >
                        <div className="prose p-4 px-8">
                            <h3>AZAD ISLAMIC UNIVERSITY</h3>
                            <p>Associate Degree Operation Physical Education</p>
                            <p>2014 to 2017</p>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
