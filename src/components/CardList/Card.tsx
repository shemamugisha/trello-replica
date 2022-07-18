import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ITasks } from '../../interface';
import { style } from './style';

interface ICard extends ITasks {
    index: number;
}

const Card: FC<ICard> = ({ id, color, message, index }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    className={style.cardContainer}
                    key={id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className={style.cardWrapper}>
                        <div
                            style={{ backgroundColor: `${color}` }}
                            className={`${
                                color
                                    ? 'w-[40px] h-[8px] mr-[4px] mb-[4px] text-[12px] font-bold overflow-hidden text-ellipsis whitespace-nowrap rounded-[3px]'
                                    : style.hideContent
                            }`}
                        ></div>
                        <h3 className={style.cardMessage}>{message}</h3>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Card;
