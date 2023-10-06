import React, { useState } from 'react';

const AddExpense = ({ setExpenses, initialCategories }) => {
  const [expense, setExpense] = useState({
    type: 'Cash In',
    category: '',
    amount: '',
    date: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'category') {
      const updatedCategory = initialCategories.find((category) => category.name === value);
      setExpense({
        ...expense,
        [name]: updatedCategory,
      });
    } else {
      setExpense({
        ...expense,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new expense object
    const newExpense = {
      ...expense,
      amount: parseFloat(expense.amount), // Ensure amount is a number
    };

    // Call the setExpenses function to update the expenses state with the new expense
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    // Reset the form
    setExpense({
      type: 'Cash In',
      category: '',
      amount: '',
      date: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Expense Type:</label>
          <div className="flex items-center space-x-2">
            <label>
              <input
                type="radio"
                id="cashIn"
                name="type"
                value="Cash In"
                checked={expense.type === 'Cash In'}
                onChange={handleInputChange}
              />
              Cash In
            </label>
            <label>
              <input
                type="radio"
                id="cashOut"
                name="type"
                value="Cash Out"
                checked={expense.type === 'Cash Out'}
                onChange={handleInputChange}
              />
              Cash Out
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={expense.category.name}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            {initialCategories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={expense.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={expense.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
