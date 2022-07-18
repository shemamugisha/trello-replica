import { FC } from 'react';
import { IFormProps } from '../../interface';
import { MdClose } from 'react-icons/md';

const style = {
    form: 'block mt-[0em] bg-[#fff]',
    input: 'w-full bg-[#fff] border-2 border-[#0079bf] rounded-[3px] outline-none px-[12px] py-[8px] mb-[8px]',
    buttonContainer: 'w-full flex justify-start items-center',
    addButton:
        'w-max h-[32px] rounded-[3px] outline-none border-0 flex items-center cursor-pointer text-[#fff] bg-[#0079bf] hover:bg-[#026aa7] px-[12px]',
    closeButton: 'text-[#42526e] text-[24px] mt-[6px] cursor-pointer ml-[8px] w-[32px] h-[32px] leading-[32px]',
};

const Form: FC<IFormProps> = ({ setShowForm, formRef, handlerSubmit, placeHolder, buttonName }) => {
    return (
        <form className={style.form} onSubmit={handlerSubmit}>
            <input className={style.input} type="text" ref={formRef} required placeholder={placeHolder} />
            <div className={style.buttonContainer}>
                <button className={style.addButton}>
                    <span className="text-[14px]">{buttonName}</span>
                </button>
                <span onClick={() => setShowForm(false)} className={style.closeButton}>
                    <MdClose />
                </span>
            </div>
        </form>
    );
};

export default Form;
