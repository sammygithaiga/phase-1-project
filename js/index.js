fetch('http://localhost:8000/expenses')
  .then(response => response.json())
  .then(data => {
    console.log('Expense data:', data);
    // Use the fetched expense data in your application
  })
  .catch(error => console.error('Error fetching expenses:', error));
