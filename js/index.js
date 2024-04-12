
document.addEventListener('DOMContentLoaded', () => {
    
    const expenseList = document.getElementById('expense')}
  );
  


$(document).ready(function() {
    // Function to handle form submission
    $("#expense-form").submit(function(event) {
        event.preventDefault(); 
        
        // Get form values
        var amount = $("#amount").val();
        var description = $("#description").val();
        var category = $("#category").val();
        
        // Validate form input (you can add more validation as needed)
        if (amount === "" || description === "" || category === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        // Create new expense item
        var expenseItem = `<li class="list-group-item">${description} - ${amount} Ksh (${category})</li>`;
        
        // Append expense item to expense list
        $("#expense-list").append(expenseItem);
        
        // Clear form fields after submission
        $("#amount").val("");
        $("#description").val("");
        $("#category").val("");
    });
    
    // Event listener for search button click
    $("#search-btn").click(function() {
        var searchTerm = $("#search-input").val().toLowerCase();
        
        // Filter expenses based on search term
        $(".list-group-item").each(function() {
            var expenseText = $(this).text().toLowerCase();
            if (expenseText.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    
    // Event listener for clear button
    $("#clear-btn").click(function() {
        $("#expense-list").empty();
    });
    
    // Event listener for filtering expenses by category
    $("#filter-category").change(function() {
        var selectedCategory = $(this).val();
        
        // Show/hide expenses based on selected category
        if (selectedCategory === "all") {
            $(".list-group-item").show();
        } else {
            $(".list-group-item").each(function() {
                if ($(this).text().toLowerCase().includes(selectedCategory.toLowerCase())) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
});
$(document).ready(function() {
    // Event listener for login button click
    $("#login-btn").click(function() {
        var email = $("#email-input").val();

       
        if (email) {
            localStorage.setItem("loggedInUser", email);
            
            alert("Logged in successfully!");
           
            window.location.href = "dashboard.html";
        } else {
            alert("Please enter your email.");
        }
          alert("enter a valid email")

        
    });
});
// Event listener for filtering expenses by category
    $("#filter-category").change(function() {
        var selectedCategory = $(this).val();
        
        // Show/hide expenses based on selected category
        if (selectedCategory === "all") {
            $(".list-group-item").show();
        } else {
            $(".list-group-item").each(function() {
                if ($(this).text().toLowerCase().includes(selectedCategory.toLowerCase())) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });

    // Event listener for delete button click
    $(document).on("click", ".delete-btn", function() {
        $(this).parent().remove(); 
    });
    $(document).ready(function() {
    // Check if user is logged in
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "login.html"; 
    }
    // Your other JavaScript code goes here
});
// Example: Filter expenses by category
const expenses = [
    { description: 'Groceries', amount: 50, category: 'Food' },
    { description: 'Gas', amount: 30, category: 'Transportation' },
    { description: 'Rent', amount: 1000, category: 'Housing' }
];

const foodExpenses = expenses.filter(expense => expense.category === 'Food');
console.log(foodExpenses);

// Example: Map expenses to a new format
const expense = [
    { description: 'Groceries', amount: 50, category: 'Food' },
    { description: 'Gas', amount: 30, category: 'Transportation' },
    { description: 'Rent', amount: 1000, category: 'Housing' }
];

const expenseDetails = expenses.map(expense => `${expense.description} - ${expense.amount} Ksh`);
console.log(expenseDetails);
$(document).ready(function(){
    let expenses = []; // Array to store expenses

    // Function to update the total expenses
    function updateTotalExpenses() {
        const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
        $('#total-expenses').text('$' + totalExpenses.toFixed(2));
    }
$(document).ready(function() {
    let expenses = []; // Array to store expenses

    // Function to update the total expenses
    function updateTotalExpenses() {
        const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
        $('#total-expenses').text('$' + totalExpenses.toFixed(2));
    }

    // Function to add a new expense
    function addExpense(description, amount, category) {
        const expense = { description, amount: parseFloat(amount), category };
        expenses.push(expense);
        updateExpenseList();
        updateTotalExpenses()
    }

    // Function to update the expense list
    function updateExpenseList() {
        const expenseList = $('#expense-list');
        expenseList.empty(); // Clear existing list

        expenses.forEach(expense => {
            const listItem = $('<li>').addClass('list-group-item').text(`${expense.description} - $${expense.amount.toFixed(2)} (${expense.category})`);
            expenseList.append(listItem);
        });
    }

    
    $('#expense-form').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const description = $('#description').val();
        const amount = $('#amount').val();
        const category = $('#category').val();

        if (description && amount && category) { // Ensure all fields are filled
            addExpense(description, amount, category);
            // Clear input fields after adding expense
            $('#description').val('');
            $('#amount').val('');
            $('#category').val('');
        }
    });
})});

// Add event listener to the search button
    $('.search-button').click(function() {
        // Your search button click action goes here
        alert('Search button clicked!');
        // Replace the alert with your actual search functionality
    });

    $(document).ready(function() {
        let expenses = []; // Array to store expenses

    });

      $(document).ready(function() {
        
        const correctPassword = "password123";

        // Event listener for confirming password
        $('#confirmPassword').click(function() {
            const enteredPassword = $('#password').val();

            if (enteredPassword === correctPassword) {
                // Password is correct, show expenses
                $('#passwordModal').modal('hide'); 
                // TODO: Show expenses (implement your logic here)
                alert("Access granted! You can now view your expenses.");
            } else {
                // Password is incorrect, show error message
                alert("Incorrect password. Please try again.");
            }
        });
    });
    // Function to check if the user is logged in
        function isLoggedIn() {
            return sessionStorage.getItem('loggedIn') === 'true';
            expenses.forEach(expense => {
                const listItem = $('<li>').addClass('list-group-item').text(`${expense.description} - $${expense.amount.toFixed(2)}`);
                expenseList.append(listItem);
            });
        };
        
  
    
        
       