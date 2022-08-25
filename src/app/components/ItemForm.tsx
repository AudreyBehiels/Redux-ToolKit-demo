import React, { FC, useState } from 'react';

const ItemForm: FC = () => {
  const [itemTitle, setItemTitle] = useState<string>('');
  const [itemDesc, setItemDesc] = useState<string>('');

  return (
    <>
      <h3>Create todo list</h3>
      <div className='container'>
        <div>
          <label className='row'>
            <h4 className='col-4 text-right'>Title:</h4>
            <input
              className='col-8'
              type='text'
              value={itemTitle}
              placeholder='e.g. Clean up room'
            ></input>
          </label>
          <label className='row'>
            <h4 className='col-4 text-right'>Description:</h4>
            <textarea
              id='description'
              className='col-8'
              rows={2}
              cols={20}
              value={itemDesc}
              placeholder='bedroom, ...'
            ></textarea>
          </label>
        </div>
      </div>

      <button type='button' className='btn btn-primary'>
        Add
      </button>
    </>
  );
};

export default ItemForm;
