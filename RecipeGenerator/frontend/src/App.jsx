import React, { useState } from 'react';

const App = () => {
  const [ingredients, setIngredients] = useState('');

  return (
    <div>
      <h1>Recipe Generator</h1>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients"
      />
      <p>{ingredients}</p>
    </div>
  );
};

export default App;