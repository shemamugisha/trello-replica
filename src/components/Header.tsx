import { FC } from 'react';
import { MenuIcon, ArrowDown, HelpIcon, NotificationIcon } from './icons';
import { IMenuItems } from '../interface';
import { MdSearch } from 'react-icons/md';

const MenuItem: FC<IMenuItems> = ({ name }): JSX.Element => {
    return (
        <div className="hover:bg-[#567B96] text-[#fff] text-[14px] h-[32px] px-[12px] inline-flex items-center cursor-pointer rounded-[3px]">
            <span>{name}</span>
            <ArrowDown className="ml-[6px]" />
        </div>
    );
};

const Header: FC = () => {
    return (
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
                        className="w-[250px] search rounded-[3px] h-[32px] border focus:bg-[#fff] border-[hsla(0,0%,100%,.25)] bg-[hsla(0,0%,100%,.3)] outline-none pl-[30px]"
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
    );
};

export default Header;
