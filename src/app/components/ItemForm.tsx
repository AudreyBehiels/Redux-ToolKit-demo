import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addTodoItemAction, updateTodoItemAction } from '../redux/actions';

const ItemForm: FC = () => {
    const dispatch = useAppDispatch();
    const draftItem = useAppSelector((store) => store.toDoDraftItem);

    // Local State
    const [id, seId] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        if (draftItem?.title && draftItem?.description) {
            seId(draftItem.id!);
            setTitle(draftItem.title);
            setDescription(draftItem.description);
        }
    }, [draftItem]);

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

    // Updates selected item in list
    const onUpdateAction = (): void => {
        dispatch(updateTodoItemAction({ id, title, description }));
        clearFields();
    };

    return (
        <>
            <h3 className="mb-4">Create todo list</h3>
            <div className="container">
                <form>
                    <label className="row" htmlFor="title">
                        <h4 className="col-12">Title:</h4>
                    </label>
                    <input
                        id="title"
                        className="col-12"
                        type="text"
                        value={title}
                        placeholder="e.g. Clean up room"
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            setTitle(e.currentTarget.value)
                        }
                    ></input>
                    <label className="row" htmlFor='description'>
                        <h4 className="col-12">Description:</h4>
                    </label>
                    <textarea
                        id="description"
                        className="col-12"
                        rows={2}
                        cols={20}
                        value={description}
                        placeholder="bedroom, ..."
                        onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                            setDescription(e.currentTarget.value)
                        }
                    ></textarea>
                </form>
            </div>
            {draftItem.title ? (
                <button type="button" className="btn btn-info" onClick={onUpdateAction}>
                    Update
                </button>
            ) : (
                <button type="button" className="btn btn-primary" onClick={onAddAction}>
                    Add
                </button>
            )}
        </>
    );
};

export default ItemForm;
