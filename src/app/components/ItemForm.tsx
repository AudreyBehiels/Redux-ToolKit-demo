import React, { FC, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTodoItemAction } from '../redux/actions';

const ItemForm: FC = () => {
    const dispatch = useAppDispatch();
    // Local State
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

     // Clear input fields
     const clearFields = (): void => {
        setTitle('');
        setDescription('');
    };

    // Adds item to list
    const onAddAction = (): void => {
        dispatch(addTodoItemAction({ title, description }));
        clearFields();
    };

    return (
        <>
            <h3>Create todo list</h3>
            <div className="container">
                <div>
                    <label className="row">
                        <h4 className="col-4 text-right">Title:</h4>
                        <input
                            className="col-8"
                            type="text"
                            value={title}
                            placeholder="e.g. Clean up room"
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setTitle(e.currentTarget.value)
                            }
                        ></input>
                    </label>
                    <label className="row">
                        <h4 className="col-4 text-right">Description:</h4>
                        <textarea
                            id="description"
                            className="col-8"
                            rows={2}
                            cols={20}
                            value={description}
                            placeholder="bedroom, ..."
                            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                                setDescription(e.currentTarget.value)
                            }
                        ></textarea>
                    </label>
                </div>
            </div>

            <button type="button" className="btn btn-primary" onClick={onAddAction}>
                Add
            </button>
        </>
    );
};

export default ItemForm;
