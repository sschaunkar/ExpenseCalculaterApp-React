import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
    const onSaveExpenseDataHandler = (expensedata) =>{
        const data = {
            ...expensedata,
            id:Math.random().toString()
        }
        props.onSaveExpenseData(data);
        console.log(data);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense
