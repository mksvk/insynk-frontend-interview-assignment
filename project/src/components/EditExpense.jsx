import React, { useState, useEffect } from 'react';

const EditExpense = ({ expense, setExpenses,expenses,setEnableEdit,categories }) => {
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  // Update the editedExpense state when the expense prop changes
  useEffect(() => {
    setEditedExpense({ ...expense });
  }, [expense]);

  // Handle changes to input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      const updatedCategory = categories.find((category) => category.name === value);
      setEditedExpense({
        ...editedExpense,
        [name]: updatedCategory,
      });
    } else {
      setEditedExpense({
        ...editedExpense,
        [name]: value,
      });
    }
  };

  
  const handleSubmit = () => {
    // Find the index of the edited expense in the expenses array
    const index = expenses.findIndex((exp) => exp.id === editedExpense.id);
    

    if (index !== -1) {
      // Create a copy of the expenses array
      const updatedExpenses = [...expenses];

      // Update the edited expense within the copy
      updatedExpenses[index] = editedExpense;

      // Call setExpenses to update the state with the new expenses array
      setExpenses(updatedExpenses);
      setEnableEdit(false)
    }
  };
  return (
    <div>
      <h2>Edit Expense</h2>
      <form>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={editedExpense.type}
            onChange={handleInputChange}
          >
            <option value="Cash In">Cash In</option>
            <option value="Cash Out">Cash Out</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={editedExpense.category.name}
            onChange={handleInputChange}
          >
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={editedExpense.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={editedExpense.amount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={editedExpense.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExpense;
