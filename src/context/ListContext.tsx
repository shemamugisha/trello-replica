/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, createContext, useContext } from 'react';
import { IListContext, IList, ITasks } from '../interface';
import { data } from './DATA';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const initialState: IListContext = {
    list: data,
    addList: () => {},
    addCard: () => {},
    setList: () => {},
};

export const ListContext = createContext<IListContext>(initialState);

export const useList = (): IListContext => useContext(ListContext);

interface IChildren {
    children: React.ReactNode;
}

export const ListProvider: FC<IChildren> = ({ children }) => {
    const [list, setList] = useLocalStorage('list', initialState.list);

    const addList = (lists: IList): IList[] | void => {
        // if (list.find((lst) => lst.title === lists.title)) return list;
        const listObj: IList = {
            id: lists.id,
            title: lists.title,
            tasks: [],
        };

        setList([...list, listObj]);
    };

    const addCard = (id: string, card: ITasks): void => {
        const cardObj: ITasks = {
            id: card.id,
            message: card.message,
        };

        const newTask = list.map((lst): IList => {
            if (lst.id === id) {
                lst.tasks.push(cardObj);
            }

            return lst;
        });

        setList(newTask);
    };

    return <ListContext.Provider value={{ list, addList, addCard, setList }}>{children}</ListContext.Provider>;
};
