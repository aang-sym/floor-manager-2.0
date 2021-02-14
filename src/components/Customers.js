import Customer from "./Customer";

const Customers = ({ customers, onDelete, onToggle }) => {
  return (
    <>
      {customers.map((customer) => (
        <Customer
          key={customer.id}
          customer={customer}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Customers;
