import { FC } from 'react';
import { MdGroup } from 'react-icons/md';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const SideBar: FC = () => {
    return (
        <aside className="h-screen w-[40px]  hover:bg-[#fff] cursor-pointer fixed left-0 p-[4px] top-[44px] linear bg-[#0480c9] shadow-[-6px_2px_8px_1px_#000]">
            <button className="w-[32px] h-[32px] border-0 rounded-[3px] outline-none cursor-pointer flex items-center justify-center text-[#fff] bg-[#fff]">
                <MdGroup className="text-[20px] text-[#000]" />
            </button>
            <button className="w-[32px] h-[32px] border-0 rounded-[3px] outline-none cursor-pointer flex items-center justify-center text-[#fff] bg-transparent mt-[8px]">
                <HiOutlineChevronDoubleRight className="text-[20px] text-[#fff]" />
            </button>
        </aside>
    );
};

export default SideBar;
