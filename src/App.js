import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Form from "./components/Form";
import Customers from "./components/Customers";
import AddButton from "./components/AddButton";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const customersFromServer = await fetchCustomers();
      setCustomers(customersFromServer);
    };

    getCustomers();
  }, []);

  // Fetch customers
  const fetchCustomers = async () => {
    const res = await fetch("http://localhost:5000/customers");
    const data = await res.json();

    return data;
  };

  // Fetch customer
  const fetchCustomer = async (id) => {
    const res = await fetch(`http://localhost:5000/customers/${id}`);
    const data = await res.json();

    return data;
  };

  // Add customer
  const addCustomer = async (customer) => {
    const res = await fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    const data = await res.json();

    setCustomers([...customers, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newCustomer = { id, ...customer };
    // setCustomers([...customers, newCustomer]);
  };

  // Delete customer
  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:5000/customers/${id}`, {
      method: "DELETE",
    });

    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Toggle priority
  const togglePriority = async (id) => {
    const customerToToggle = await fetchCustomer(id);
    const updCustomer = {
      ...customerToToggle,
      priority: !customerToToggle.priority,
    };

    const res = await fetch(`http://localhost:5000/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updCustomer),
    });

    const data = await res.json();

    setCustomers(
      customers.map((customer) =>
        customer.id === id
          ? { ...customer, priority: !customer.priority }
          : customer
      )
    );
  };

  return (
    <Router>
      <>
        <NavBar />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {customers.length > 0 ? (
                <Customers
                  customers={customers}
                  onDelete={deleteCustomer}
                  onToggle={togglePriority}
                />
              ) : (
                "Add your first customer below!"
              )}
              {showAddCustomer && <Form onAdd={addCustomer} />}
              <AddButton
                onAdd={() => setShowAddCustomer(!showAddCustomer)}
                showAdd={showAddCustomer}
              />
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </>
    </Router>
  );
};

export default App;
