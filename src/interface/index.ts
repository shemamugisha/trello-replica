export interface IMenuItems {
    name: string;
}

export interface ITasks {
    id: string;
    color?: string;
    message: string;
}

export interface IList {
    id: string;
    tasks: ITasks[];
    title: string;
}

export interface IListContext {
    list: IList[];
    addList: (list: IList) => void;
    addCard: (id: string, card: ITasks) => void;
    setList: React.Dispatch<React.SetStateAction<IList[]>>;
}

export interface IFormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    formRef: React.MutableRefObject<HTMLInputElement>;
    handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    placeHolder: string;
    buttonName: string;
}

export interface ICardProps {
    cardName: string;
    bgColor: string;
}

export interface ICardColProps {
    cardColName: string;
}
