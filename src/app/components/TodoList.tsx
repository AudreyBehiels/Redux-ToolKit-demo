import React, { FC } from 'react';
import { useAppSelector } from '../hooks';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
    const todoList = useAppSelector(store => store.todoList);

    return (
        <section>
            <ul className="list-group">
                {todoList?.map((item) => (
                    <li key={item.id}>
                        <TodoItem item={item} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
