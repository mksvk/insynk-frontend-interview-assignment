import React, { useState } from 'react';

const AddCategory = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() === '') {
      return; // Prevent adding empty categories
    }

    // Create a new category object
    const category = {
      name: newCategory,
      isMain: false, // Set to false by default for new categories
    };

    // Add the new category to the categories list
    setCategories([...categories, category]);

    // Reset the input field
    setNewCategory('');

    // Disable editing mode
    setIsEditing(false);
  };

  const handleEditCategory = (index) => {
    // Toggle editing mode for the selected category
    const updatedCategories = categories.map((category, i) =>
      i === index ? { ...category, isEditing: !category.isEditing } : category
    );
    setCategories(updatedCategories);
  };

  const handleDeleteCategory = (index) => {
    // Remove the selected category from the categories list
    const updatedCategories = categories.filter((category, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newCategory}
            onChange={handleInputChange}
            placeholder="Enter category name"
          />
          <button onClick={handleAddCategory}>Add</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>Add Category</button>
      )}

      <ul>
        {categories.map((category, index) => (
          <li key={category.name}>
            {category.isEditing ? (
              <div>
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) => {
                    const updatedCategories = categories.map((c, i) =>
                      i === index ? { ...c, name: e.target.value } : c
                    );
                    setCategories(updatedCategories);
                  }}
                />
                <button onClick={() => handleEditCategory(index)}>Save</button>
              </div>
            ) : (
              <>
                {category.name}
                {!category.isMain && (
                  <>
                    <button onClick={() => handleEditCategory(index)}>Edit</button>
                    <button onClick={() => handleDeleteCategory(index)}>Delete</button>
                  </>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddCategory;
