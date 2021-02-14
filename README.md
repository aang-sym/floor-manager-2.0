# Floor Manager 2.0

This is a reimagining of Telstra's current Floor Management to system to organise customers into a queue system using ReactJS. The aim is to provide a more lightweight, more reliable product that also provides consultant analytics. 

# Component breakdown
This project is a demonstration of my first time using ReactJS, thus I will be attempting to learn as many different aspects of ReactJS to integrate into this project.

The component breakdown is as follows, in hierarchical order of user input all the way to user view.

## Form
User inputs a customer's name, number and other transactional related details. useState was used to update the back-end's state.

## Customer
The customer component is purely an embodiment of what the user has inputted.

## Customers
Map function is used to assign customer details to the customers component.

## App
In App.js useState, useEffect, react-router-dom and a JSON server are all used. The customer details are asynchronously sent to the JSON server where they can be added or deleted based on UI input.

# Future tasks
Bootstrap has been used but I would like to make it look more modern.

SQL based back-end system for the database.

Adding user registration and authentication.

User analytics/statistics to show how quickly a customer gets served.

Customer wait time that counts up when customer is added..