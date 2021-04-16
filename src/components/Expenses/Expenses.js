import React, { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [selectedYear, setselectedYear] = useState('2020');

    const selectedYearHandler = (year) => {
        setselectedYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear)
    // console.log(selectedYear);
    
    return (

        <Card className='expenses'>
            <ExpensesFilter selectedYear={selectedYearHandler} selected={selectedYear} />
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>



    )
}

export default Expenses
