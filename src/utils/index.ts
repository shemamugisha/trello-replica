/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IList, ITasks } from '../interface';

const reorder = (list: ITasks[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const onDragEnd = (res: any, list: IList[], setList: React.Dispatch<React.SetStateAction<IList[]>>): void => {
    if (!res.destination) return;
    let newList = list;
    const { source, destination } = res;

    if (source.droppableId === destination.droppableId) {
        const updatedList = list.find((itm) => itm.id === res.source.droppableId)!.tasks;
        const items = reorder(updatedList, source.index, destination!.index);
        newList = list.map((item) => (item.id === res.source.droppableId ? { ...item, tasks: items } : item));
    } else {
        const sourceColumn = list.find((item) => item.id === source.droppableId)!;
        const destColumn = list.find((item) => item.id === destination.droppableId)!;
        const sourceItems = sourceColumn.tasks;
        const destItems = destColumn.tasks;

        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);

        newList = list.map((item) =>
            item.id === destination.droppableId
                ? {
                      ...item,
                      tasks: destItems,
                  }
                : item.id === source.droppableId
                ? {
                      ...item,
                      tasks: sourceItems,
                  }
                : item,
        );
    }
    setList(newList);
};
