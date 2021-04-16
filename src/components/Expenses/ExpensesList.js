import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

function ExpensesList(props) {
    var ExpensesList = props.filteredExpenses.length > 0 ? (props.filteredExpenses.map(expense => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))) : (<h2 className="expenses-list__fallback">No Expenses Found</h2>);
    return (
        <ul className='expenses-list'>
            {ExpensesList}
        </ul>
    )
}

export default ExpensesList
