import React,{useState} from 'react';
import "./ExpenseTrackingPage.css"
import EditExpense from './EditExpense';


const ExpenseTrackingPage = ({expenses,setExpenses ,categories}) => {
    const [enableEdit,setEnableEdit] = useState(false)
    const [itemToedit , setItemToedit]= useState(null)

  // Add logic to fetch and organize expenses by months

  const editExpense = (expense)=>{
      setEnableEdit(true)
      setItemToedit(expense)
      console.log(expense)
  }
  return (<>
  
    <div className="expense-tracking-page">
        <div className="expenseTrackingHeading" >
            <h1>Expense Tracking</h1>
            <span className="addButton" >ADD</span>
        </div>
     

     {enableEdit ?<EditExpense expense={itemToedit} setExpenses={setExpenses} expenses={expenses} setEnableEdit={setEnableEdit} categories={categories} > </EditExpense>:""}

     {expenses.map(expense =>{
       return (
        <>
            <div onClick={()=>editExpense(expense)} >
            <span>{expense.category.name } </span>
            <span>{expense.amount}</span>
            </div>
            </>  
           
        )
})}
    </div></>
  );
};

export default ExpenseTrackingPage;
