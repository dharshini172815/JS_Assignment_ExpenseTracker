
let expenses = [];

function addExpense() {
    let name = document.getElementById("name").value.trim();
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if (!name || !amount || !category || !date) {
        alert("Please enter all details!");
        return;
    }

    let expense = {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
        category,
        date
    };

    expenses.push(expense);
    updateTable();

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("date").value = "";
}

function updateTable() {
    let tableBody = document.getElementById("expenseList");
    tableBody.innerHTML = "";

    let total = 0;
    expenses.forEach((expense, index) => {
        total += expense.amount;
        tableBody.innerHTML += `
                    <tr>
                        <td>${expense.name}</td>
                        <td>$${expense.amount.toFixed(2)}</td>
                        <td>${expense.category}</td>
                        <td>${expense.date}</td>
                        <td>
                            <button class="edit-btn" onclick="editExpense(${index})">Edit</button>
                            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
                        </td>
                    </tr>
                `;
    });

    document.getElementById("totalExpense").innerText = total.toFixed(2);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateTable();
}

function editExpense(index) {
    let expense = expenses[index];
    document.getElementById("name").value = expense.name;
    document.getElementById("amount").value = expense.amount;
    document.getElementById("category").value = expense.category;
    document.getElementById("date").value = expense.date;

    expenses.splice(index, 1);
    updateTable();
}
