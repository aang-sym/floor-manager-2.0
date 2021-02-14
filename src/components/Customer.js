import { FaTimes } from "react-icons/fa";

const Customer = ({ customer, onDelete, onToggle}) => {
  return (
    <div className={`container-fluid ${customer.priority ? 'priority' : ''}`} onDoubleClick={() => onToggle(customer.id)}>
      <div className="row my-2 bg-light">
        <div className="col text-center border-end">{customer.cxName}</div>
        <div className="col text-center border-end">{customer.cxNumber}</div>
        <div className="col text-center border-end">{customer.cxNotes}</div>
        <div className="col text-center border-end">{customer.cxType}</div>
        <div className="col text-center border-end">{customer.sale}</div>
        <div className="col text-center border-end">{customer.request}</div>

        {/* <div className="col">
          <button className="btn btn-primary" type="submit">
            Edit
          </button>
        </div> */}
        <div className="col-auto">
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(customer.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
