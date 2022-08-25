import React, { FC } from 'react';
import { TodoItemType } from '../types';
import { useAppDispatch } from '../hooks';
import { removeTodoItemAction } from '../redux/actions';

type PropsType = {
    item: TodoItemType;
};

const TodoItem: FC<PropsType> = (props) => {

    const dispatch = useAppDispatch();
    const { id, title, description } = props.item;

    // Removes item from list
    const onRemoveAction = (id: string): void => {
        dispatch(removeTodoItemAction({ id }));
    };

    return (
        <div className="card" style={{ width: '30rem' }}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <div className="card-text">{description}</div>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => onRemoveAction(id!)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
