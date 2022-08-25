import React, { FC } from 'react';
import { TodoItemType } from '../types';

type PropsType = {
    item: TodoItemType;
};

const TodoItem: FC<PropsType> = (props) => {
    const { title, description } = props.item;

    return (
        <div className="card" style={{ width: '30rem' }}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <div className="card-text">{description}</div>
            </div>
        </div>
    );
};

export default TodoItem;
