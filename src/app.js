import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configereStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({
    description: 'Water bill',
    amount: 900,
    createdAt: 0
}));
store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 120,
    createdAt: 1
}));
store.dispatch(addExpense({
    description: 'rent',
    amount: 500,
    createdAt: 2
}));


console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 