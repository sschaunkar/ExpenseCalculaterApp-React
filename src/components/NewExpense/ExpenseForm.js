import React,{useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    // const [userInput, setInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
        // setInput({
        //     ...userInput,
        //     title:event.target.value
        // })
        // setInput(prevState=>{
        //     return {
        //         ...prevState,
        //         title:event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
        // setInput({
        //     ...userInput,
        //     amount:event.target.value
            
        // })
        // setInput(prevState=>{
        //     return {
        //         ...prevState,
        //         amount:event.target.value
        //     }
        // })
    }
    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
        // setInput({
        //     ...userInput,
        //     date:event.target.value,
        // })  
        // setInput(prevState=>{
        //     return {
        //         ...prevState,
        //         date:event.target.value
        //     }
        // }) 
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title:title,
            amount:amount,
            date:new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

    }
    const [isOpen, setOpen] = useState(false);
    const closeFormHandler = (e) => {
        e.preventDefault();
        setOpen(!isOpen);
    }
    return (
        <div>
        {isOpen?(<form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'onChange={titleChangeHandler} value={title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2010-01-01" max="2050-12-31" onChange={dateChangeHandler} value={date}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={closeFormHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>):(<button onClick={closeFormHandler}>Add Expense</button>)}
        </div>
        
            
        
    )
}

export default ExpenseForm
