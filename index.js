'use strict';

const customer_data = [
        {
            "Id" : 1,
            "Name" : "Mohammad Smith",
            "DoB" : "1/1/2010",
            "FavoriteColor" : "Blue",
            "Pets" :
                [
                    { "type":"Bird", "Name":"Tweety"}
                ]
        },
        {
            "Id" : 2,
            "Name" : "Ilya Chang",
            "DoB" : "2/1/1980",
            "Pets" :
                [
                    { "type":"Bird", "Name":"Fluffy"},
                    { "type":"Cat", "Name":"Leon"}
                ]
        },
        {
            "Id" : 3,
            "Name" : "Chris",
            "DoB" : "10/31/1987",
            "Pets" :
                [
                    { "type":"Dog", "Name":"Corky"},
                    { "type":"Cat", "Name":"Bella"}
                ]
        },
        {
            "Id" : 4,
            "Name" : "Sanjay Grant",
            "DoB" : "10/31/1987",
        },
        {
            "Id" : 5,
            "Name" : "Anna Kang",
            "DoB" : "11/30/2004",
            "Pets" :
                [
                    { "type":"Lizard", "Name":"Kermit"},
                    { "type":"Lizard", "Name":"Dino"}
                ]
        },
        {
            "Id" : 6,
            "Name" : "Smith Adebayo",
            "DoB" : "11/30/2004",
            "Pets" :
                [
                    { "type":"Cat", "Name":"Walter"},
                    { "type":"Lizard", "Name":"Lizzo"},
                    { "type":"Bird", "Name":"Ladybird"}
                ]
        }
    ];

// Get the container element for the customers table
const customerTable = document.getElementById("customer-table");

// Sort customers by descending date of birth
customer_data.sort(function(a, b) {
  return new Date(b.DoB) - new Date(a.DoB);
});

// Render customers table
function renderCustomers(customers=customer_data) {
  // Clear any existing rows from the table
  customerTable.innerHTML = "";

  // Add table headers
  const tableHeaders = document.createElement("tr");
  tableHeaders.innerHTML = "<th>Name</th><th>Date of Birth</th><th>Favorite Color</th><th>Pets</th>";
  customerTable.appendChild(tableHeaders);

  // Add rows for each customer
  customers.forEach(function(customer) {

    // Code to filter customers based on search input value
    const searchForm = document.getElementById("search-form");

    // Listen for search button click
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Grab search value after click
        const searchInput = document.getElementById("search-input").value;

        if (searchInput) {
            // validate search input using regular expression
            const regex = /^[a-zA-Z]+$/;
            const errorMessage = document.getElementById("error-message");
            if (!regex.test(searchInput)) {
                errorMessage.innerText = "Search input can only contain alphabetic characters.";
                // Reset customers to all
                renderCustomers();
                return;
            }

            errorMessage.innerText = ""; // clear any previous error message

            // Filter customers based on search value
            const filteredCustomers = customer_data.filter(customer => {
                // Check if customer has pets
                const hasPets = customer.Pets;
                // Check if customer pet type or name matches the search value
                const petMatch = hasPets && customer.Pets.some(pet => pet.Name.toLowerCase().includes(searchInput.toLowerCase()) || pet.type.toLowerCase().includes(searchInput.toLowerCase()));
                return petMatch;
            });
            
            // Render a new customer table based on filtered customers
            renderCustomers(filteredCustomers);
        } else {
            // Remove error message when search is blank and reset customers to all
            const errorMessage = document.getElementById("error-message");
            errorMessage.innerText = ""; // clear any previous error message
        
            renderCustomers();
        } 
    });

    const customerRow = document.createElement("tr");

    // Add customer name
    const nameCell = document.createElement("td");
    nameCell.textContent = customer.Name;
    customerRow.appendChild(nameCell);

    // Add customer date of birth
    const dobCell = document.createElement("td");
    dobCell.textContent = customer.DoB || "";
    customerRow.appendChild(dobCell);

    // Add customer favorite color
    const colorCell = document.createElement("td");
    colorCell.textContent = customer.FavoriteColor || "";
    customerRow.appendChild(colorCell);

    if (customer.Pets) {
        // Add customer pets button
        const petsCell = document.createElement("td");
        const petsButton = document.createElement("button");
        petsButton.type = "button";
        petsButton.classList.add("btn", "btn-primary");
        petsButton.textContent = "View Pets";
        petsButton.addEventListener("click", function() {
        renderPetsModal(customer);
        });
        petsCell.appendChild(petsButton);
        customerRow.appendChild(petsCell);

    } else {
        // Add filler cell
        const petsCell = document.createElement("td");
        petsCell.textContent = "No Pets";
        customerRow.appendChild(petsCell);
    }

    customerTable.appendChild(customerRow);
  });
}

// Render the pets modal for a given customer
function renderPetsModal(customer) {
  const petModal = document.getElementById("petModal");

  const modalTitle = document.getElementById("petModalLabel");
  modalTitle.innerHTML = `${customer.Name}'s Pets`;

  // Add the pets table header
  const petsTable = document.getElementById("pet-table");
  petsTable.innerHTML = "<th>Type</th><th>Name</th>";

  // Sort pets alphabetically by type and/or name
  customer.Pets.sort(function(a, b) {
    // Sort by type
    if (a.type.toLowerCase() < b.type.toLowerCase()) {
      return -1;
    } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
      return 1;
    }
    // If types are equal, sort by name
    if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
      return -1;
    } else if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  // Add rows for each pet
  customer.Pets.forEach(function(pet) {
    const petRow = document.createElement("tr");

    // Add pet type
    const typeCell = document.createElement("td");
    typeCell.textContent = pet.type || "";
    petRow.appendChild(typeCell);

    // Add pet name
    const nameCell = document.createElement("td");
    nameCell.textContent = pet.Name;
    petRow.appendChild(nameCell); 

    petsTable.appendChild(petRow);
  });

  // Show the modal
  const modal = new bootstrap.Modal(petModal);
  modal.show();
}

renderCustomers();