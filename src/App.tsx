import React from 'react';
import './App.css';
import ItemForm from './app/components/ItemForm';
import TodoList from './app/components/TodoList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ItemForm />
            </header>
            <div className="List">
                <TodoList />
            </div>
        </div>
    );
}

export default App;
