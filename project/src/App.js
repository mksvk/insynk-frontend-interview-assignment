import React ,{useState}from 'react';

import './App.css';
import ExpenseTrackingPage from './components/ExpenseTrackingPage';
import AddExpense from './components/AddExpense';
import AddCategory from './AddCategory';

// Your data
const Categories = [
  { isMain: true, order: 1, name: "Food" },
  { isMain: true, order: 2, name: "Transportation" },
  { isMain: true, order: 3, name: "Work" },
  { isMain: false, order: 4, name: "Traveling" },
];

const ExpenseTypeEnum = {
  CashIn: "Cash In",
  CashOut: "Cash Out",
};

const Bexpenses = [
  { 
    id : 1,
    type: ExpenseTypeEnum.CashIn,
    category: Categories[0],
    date: new Date("2023-01-15"),
    amount: 100,
    description: "Income 1",
  },
  { 
    id : 2,
    type: ExpenseTypeEnum.CashOut,
    category: Categories[1],
    date: new Date("2023-01-20"),
    amount: 50,
    description: "Expense 1",
  },
  { 
    id : 3,
    type: ExpenseTypeEnum.CashOut,
    category: Categories[0],
    date: new Date("2023-02-10"),
    amount: 30,
    description: "Expense 2",
  },
  { 
    id : 4,
    type: ExpenseTypeEnum.CashIn,
    category: Categories[2],
    date: new Date("2023-02-15"),
    amount: 200,
    description: "Income 2",
  },
  // Add more expenses as needed
];


function App() {
  const [expenses,setExpenses] = useState(Bexpenses)
  const [Categories,setCategories] = useState([
    { isMain: true, order: 1, name: "Food" },
    { isMain: true, order: 2, name: "Transportation" },
    { isMain: true, order: 3, name: "Work" },
    { isMain: false, order: 4, name: "Traveling" },
  ])

  return (
    <div className="App">

 <ExpenseTrackingPage   expenses={expenses} setExpenses={setExpenses} categories={Categories} />
 <AddExpense setExpenses={setExpenses} initialCategories={Categories} />
    <AddCategory categories={Categories} setCategories={setCategories}/>

    </div>
  );
}

export default App;
