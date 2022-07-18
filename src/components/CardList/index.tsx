import { FC, useState, FormEvent, useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Form from '../Form';
import { IList } from '../../interface';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { useList } from '../../context/ListContext';
import { v4 as uuid } from 'uuid';
import { style } from './style';
import Card from './Card';

interface IlistExtended extends IList {
    colType: string;
}

const CardList: FC<IlistExtended> = ({ id, tasks, title, colType }) => {
    const [showForm, setShowForm] = useState(false);
    const [currentId, setCurrentId] = useState<string>('0');
    const cardRef = useRef<HTMLInputElement>(null!);
    const { addCard } = useList();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addCard(currentId, { id: uuid(), message: cardRef.current?.value });
        cardRef.current!.value = '';
        setShowForm(false);
    };

    return (
        <div className={style.cardListContainer}>
            <div className={style.ListHeaderWrapper}>
                <h3 className={style.cardListTitle}>{title}</h3>
                <span>
                    <BsThreeDots className="text-[24px]" />
                </span>
            </div>
            <Droppable droppableId={id} type={colType}>
                {(provided) => (
                    <div className="min-h-[2px]" {...provided.droppableProps} ref={provided.innerRef} key={id}>
                        <div className="my-[8px]">
                            {tasks &&
                                tasks.map((taks, idxx) => (
                                    <Card
                                        index={idxx}
                                        key={taks.id}
                                        id={taks.id}
                                        message={taks.message}
                                        color={taks.color}
                                    />
                                ))}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <div>
                <div>
                    <div className={`${showForm ? '' : style.hideContent}`}>
                        <Form
                            setShowForm={setShowForm}
                            placeHolder="Enter a title for this card..."
                            formRef={cardRef}
                            handlerSubmit={handleSubmit}
                            buttonName="Add card"
                        />
                    </div>
                    <div
                        onClick={() => {
                            setShowForm(true);
                            setCurrentId(id);
                        }}
                        className={`${showForm ? style.hideContent : style.showFormContent}`}
                    >
                        <span className="mr-[4px] ml-[2px] font-bold text-[20px]">
                            <AiOutlinePlus className="" />
                        </span>
                        Add Card
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;
