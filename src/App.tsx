import { FC, useState, FormEvent, useRef } from 'react';
import { EarthIcon, EarthWhiteIcon } from './components/icons';
import Form from './components/Form';
import Header from './components/Header';
import SideBar from './components/Sidebar';

import CardList from './components/CardList';
import { onDragEnd } from './utils';
import { MdClose } from 'react-icons/md';
import { AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';
import { useList } from './context/ListContext';
import { v4 as uuid } from 'uuid';

import { DragDropContext } from 'react-beautiful-dnd';

const App: FC = () => {
    const [showForm, setShowForm] = useState(false);
    const { list, addList, setList } = useList();
    const nameRef = useRef<HTMLInputElement>(null!);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const id = uuid();
        addList({
            id,
            title: nameRef.current?.value,
            tasks: [],
        });
        nameRef.current!.value = '';
        setShowForm(false);
    };
    return (
        <div className="w-full  font-light">
            <Header />
            <SideBar />
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
                            <DragDropContext onDragEnd={(res) => onDragEnd(res, list, setList)}>
                                {list.length &&
                                    list.map((lst, idx) => (
                                        <CardList
                                            colType="TASK"
                                            key={idx}
                                            id={lst.id}
                                            title={lst.title}
                                            tasks={lst.tasks}
                                        />
                                    ))}
                            </DragDropContext>
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
                                    <Form
                                        setShowForm={setShowForm}
                                        placeHolder="Enter list title..."
                                        formRef={nameRef}
                                        handlerSubmit={handleSubmit}
                                        buttonName="Add list"
                                    />
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
