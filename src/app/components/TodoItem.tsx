import React, { FC } from 'react';
import { TodoItemType } from '../types';
import { useAppDispatch } from '../hooks';
import { removeTodoItemAction, setDraftItemAction } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

type PropsType = {
    item: TodoItemType;
};

const TodoItem: FC<PropsType> = (props) => {
    const dispatch = useAppDispatch();
    const {
        item: { id, title, description },
    } = props;

    // Removes item from list
    const onRemoveAction = (): void => {
        dispatch(removeTodoItemAction({ id: id! }));
    };

    // Set selected item in store as draft item
    const onEditAction = (): void => {
        const draftItem: TodoItemType = { id, title, description };
        dispatch(setDraftItemAction({ draftItem }));
    };

    return (
        <div style={{ width: '25rem' }}>
            <button
                type="button"
                className="btn float-right bg-transparent py-0 px-1"
                onClick={() => onRemoveAction()}
            >
                <FontAwesomeIcon icon={icon({ name: 'trash-can' })} color="red" />
            </button>
            <button
                type="button"
                className="btn float-right bg-transparent py-0 px-1"
                onClick={() => onEditAction()}
            >
                <FontAwesomeIcon icon={icon({ name: 'pen-to-square' })} color="black" />
            </button>
            <h4 className="card-title">{title}</h4>
            <div className="card-text">{description}</div>
        </div>
    );
};

export default TodoItem;
