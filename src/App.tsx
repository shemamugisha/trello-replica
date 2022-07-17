import { FC, useState } from 'react';
import { MenuIcon, ArrowDown, HelpIcon, NotificationIcon, EarthIcon, EarthWhiteIcon } from './components/icons';
import { IMenuItems } from './interface/IMenuItems';
import { IFormProps } from './interface/IFormProps';
import { ICardProps, ICardColProps } from './interface/ICardProps';
import { MdSearch, MdGroup, MdClose } from 'react-icons/md';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

const MenuItem: FC<IMenuItems> = ({ name }): JSX.Element => {
    return (
        <div className="hover:bg-[#567B96] text-[#fff] text-[14px] h-[32px] px-[12px] inline-flex items-center cursor-pointer rounded-[3px]">
            <span>{name}</span>
            <ArrowDown className="ml-[6px]" />
        </div>
    );
};

const Form: FC<IFormProps> = ({ setShowForm }) => {
    return (
        <form className="block mt-[0em] bg-[#fff]">
            <input
                className="w-full bg-[#fff] border-2 border-[#0079bf] rounded-[3px] outline-none px-[12px] py-[8px] mb-[8px]"
                type="text"
                required
                placeholder="Enter a title for this card..."
                name="cardName"
            />
            <div className="w-full flex justify-start items-center">
                <button className="w-max h-[32px] rounded-[3px] outline-none border-0 flex items-center cursor-pointer text-[#fff] bg-[#0079bf] hover:bg-[#026aa7] px-[12px]">
                    <span className="text-[14px]">Add card</span>
                </button>
                <span
                    onClick={() => setShowForm(false)}
                    className="text-[#42526e] text-[24px] mt-[6px] cursor-pointer ml-[8px] w-[32px] h-[32px] leading-[32px]"
                >
                    <MdClose />
                </span>
            </div>
        </form>
    );
};

const Card: FC<ICardProps> = ({ cardName, bgColor }) => {
    return (
        <div className="my-[8px]">
            <div className="bg-[#fff] mb-[0px] cursor-pointer rounded-[3px] shadow-[0_1px_0_rgb(9,30,66/25%)] pt-[6px] pb-[2px] px-[8px]">
                <div
                    className={`bg-[${bgColor}] w-[40px] h-[8px] mr-[4px] mb-[4px] text-[12px] font-bold overflow-hidden text-ellipsis whitespace-nowrap rounded-[3px]`}
                ></div>
                <h3 className="mb-[4px] overflow-hidden text-[14px] font-normal leading-[20px] text-[#172b4d]">
                    {cardName}
                </h3>
            </div>
        </div>
    );
};

const CardCol: FC<ICardColProps> = ({ cardColName }) => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="min-w-[272px] listCard-container w-[284px] h-auto overflow-y-auto bg-[#ebecf0] mx-[4px] rounded-[3px] pt-[10px] pb-[8px] px-[8px]">
            <div className="w-full flex justify-between items-center cursor-pointer overflow-y-auto">
                <h3 className="m-0 text-[#172b4d] text-[14px] leading-[20px] font-semibold pt-[4px] pb-[10px] px-[8px]">
                    {cardColName}
                </h3>
                <span>
                    <BsThreeDots className="text-[24px]" />
                </span>
            </div>

            <div className="min-h-[2px]">
                <div className="my-[8px]">
                    <Card bgColor="rgb(235,90,70)" cardName="Helpdesk Call CC999" />
                </div>
            </div>
            <div>
                <div>
                    <div className={`${showForm ? '' : 'hidden'}`}>
                        <Form setShowForm={setShowForm} />
                    </div>
                    <div
                        onClick={() => setShowForm(true)}
                        className={`${
                            showForm
                                ? 'hidden'
                                : 'flex items-center hover:text-[#172b4d] hover:bg-[rgba(9,30,66,.0784313725490196)] text-[#5e6c84] rounded-[3px] text-[14px] font-normal leading-[20px] py-[2px] cursor-pointer'
                        }`}
                    >
                        <span className="mr-[4px]">
                            <AiOutlinePlus className="" />
                        </span>
                        Add Card
                    </div>
                </div>
            </div>
        </div>
    );
};

const App: FC = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="w-full h-screen font-light">
            <header className="bg-[#004269] box-border py-[6px] px-[4px] h-[44px] z-[9999] fixed left-0 right-0 top-0 flex items-center justify-between">
                <div className="w-full inline-flex items-center justify-start">
                    <button className="w-[32px] h-[32px] mr-0 flex items-center rounded-[3px] cursor-pointer outline-none justify-center hover:bg-[hsla(0,0%,100%,.2)] bg-transparent border-0 text-[#fff]">
                        <MenuIcon />
                    </button>
                    <div className="hover:bg-[#567B96] text-[14px] h-[32px] px-[8px] inline-flex items-center cursor-pointer rounded-[3px] text-[#fff]">
                        <p className="hover:bg-[url('./Assets/logo.gif')] bg-[url('./Assets/flogo.gif')] bg-no-repeat bg-contain bg-[top_bottom_9px] w-[75px] h-[15px] py-[8px] m-0"></p>
                    </div>
                    <MenuItem name="Workspaces" />
                    <MenuItem name="Recent" />
                    <MenuItem name="Starred" />
                    <MenuItem name="Templates" />
                    <button className="w-max h-[32px] border-0 rounded-[3px] hover:bg-[hsla(0,0%,100%,.2)] bg-[rgba(0,0,0,.24)] outline-none flex items-center text-[#fff] text-[14px] px-[12px] ml-[12px]">
                        <span>Create</span>
                    </button>
                </div>
                <div className="w-full inline-flex items-center justify-end">
                    <div className="relative mr-[8px]">
                        <input
                            className="w-[250px] rounded-[3px] h-[32px] border focus:bg-[#fff] border-[hsla(0,0%,100%,.25)] bg-[hsla(0,0%,100%,.3)] outline-none pl-[30px]"
                            type="search"
                            placeholder="Search"
                        />
                        <span className="text-[hsla(0,0%,100%,.8)]  text-[20px] height-[20px] width-[20px] absolute top-[7px] left-[5px]">
                            <MdSearch className="focus:text-[#000000]" />
                        </span>
                    </div>
                    <button className="w-[32px] h-[32px] mr-0 flex items-center justify-center rounded-[3px] cursor-pointer outline-none hover:bg-[hsla(0,0%,100%,.2)]  bg-transparent border-0 text-[#fff]">
                        <HelpIcon className="text-[30px]" />
                    </button>
                    <button className="w-[32px] h-[32px] mr-0 flex items-center justify-center rounded-[3px] cursor-pointer outline-none hover:bg-[hsla(0,0%,100%,.2)]  bg-transparent border-0 text-[#fff]">
                        <NotificationIcon className="text-[30px]" />
                    </button>
                    <span className="text-[#172b4d] bg-[#dfe1e6] h-[32px] w-[32px] rounded-[50%] text-center font-bold text-[14px]  leading-[32px] ml-[4px]">
                        QK
                    </span>
                </div>
            </header>
            <aside className="h-screen w-[40px]  hover:bg-[#fff] cursor-pointer fixed left-0 p-[4px] top-[44px] linear bg-[#0480c9] shadow-[-6px_2px_8px_1px_#000]">
                <button className="w-[32px] h-[32px] border-0 rounded-[3px] outline-none cursor-pointer flex items-center justify-center text-[#fff] bg-[#fff]">
                    <MdGroup className="text-[20px] text-[#000]" />
                </button>
                <button className="w-[32px] h-[32px] border-0 rounded-[3px] outline-none cursor-pointer flex items-center justify-center text-[#fff] bg-transparent mt-[8px]">
                    <HiOutlineChevronDoubleRight className="text-[20px] text-[#fff]" />
                </button>
            </aside>
            <main>
                <section className="block">
                    <div className="w-full min-h-[45px] flex justify-center items-center relative bg-[#fff] p-[8px] box-border border border-b-[#f4f5f7]">
                        <div className="flex h-[29px] justify-center items-center">
                            <EarthIcon className="pr-[8px]" />
                            <span className="m-0 text-[14px] font-bold leading-[22px] text-[#172b4d]">
                                This board is set to public. Board admins can change its visibility setting at any time.
                            </span>

                            <a className="text-[14px] underline text-[#6b778c] ml-[10px] font-normal" href="#">
                                Learn more here
                            </a>
                        </div>
                        <span className="text-[#42526e] cursor-pointer absolute right-0 p-[8px]">
                            <MdClose className="text-[24px]" />
                        </span>
                    </div>
                    <div className="p-[4px]">
                        <div className="flex items-center pt-[4px] pb-[8px]">
                            <h1 className="text-[18px] font-bold text-[#fff] px-[12px] m-[0]">Kanban Board</h1>
                            <div className="cursor-pointer flex items-center justify-center rounded-[3px] bg-[hsla(0,0%,100%,.3)] text-[#fff] h-[32px] w-[32px]">
                                <span className="text-[18px] hover:scale-[1.2] hover:text-[#f2d600]">
                                    <AiOutlineStar />
                                </span>
                            </div>
                            <div className="w-[1px] h-[16px] bg-[hsla(0,0%,100%,.3)] m-[8px]"></div>
                            <button className="w-max text-[#fff] h-[32px] border-0 rounded-[3px] outline-none flex items-center hover:bg-[hsla(0,0%,100%,.4)] bg-[hsla(0,0%,100%,.3)] px-[12px]">
                                <span className="pr-[8px] top-[1px] relative">
                                    <EarthWhiteIcon />
                                </span>
                                <span className="text-[14px]">Public</span>
                            </button>
                            <div className="w-[1px] h-[16px] bg-[hsla(0,0%,100%,.3)] m-[8px]"></div>
                            <span className="text-[#172b4d] bg-[#dfe1e6] h-[32px] w-[32px] rounded-[50%] text-center font-bold text-[14px]  leading-[32px] ml-[4px]">
                                AH
                            </span>
                        </div>

                        <div className="card-container w-full overflow-y-hidden overflow-x-auto flex items-start flex-nowrap">
                            <CardCol cardColName="To Do" />
                            <CardCol cardColName="Development" />
                            <CardCol cardColName="Testing" />
                            <CardCol cardColName="Done" />

                            <div
                                className={`${
                                    showForm
                                        ? 'min-w-[272px] w-[284px] bg-[#fff] mx-[4px] rounded-[3px] pt-[10px] pb-[8px] px-[8px]'
                                        : 'min-w-[272px] w-[284px] bg-[hsla(0,0%,100%,.2)] mx-[4px] rounded-[3px] pt-[10px] pb-[8px] px-[8px]'
                                }`}
                            >
                                <div
                                    onClick={() => setShowForm(true)}
                                    className={`${
                                        showForm
                                            ? 'hidden'
                                            : 'flex items-center cursor-pointer rounded-[3px] text-[14px] py-[2px] px-[0px] leading-[20px] font-normal text-[#fff]'
                                    }`}
                                >
                                    <span className="mr-[4px] text-[20px]">
                                        <AiOutlinePlus className="" />
                                    </span>
                                    Add another list
                                </div>
                                <div className={`${showForm ? '' : 'hidden'}`}>
                                    <Form setShowForm={setShowForm} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
