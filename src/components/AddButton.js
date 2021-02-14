const AddButton = ({ onAdd, showAdd }) => {
  return (
    <div className="container-fluid">
      <input
        type="submit"
        value={showAdd ? 'Close' : 'Add Customer'}
        className={showAdd ? 'form-control border-0 btn btn-danger my-1' : 'form-control border-0 btn btn-primary my-1'}
        onClick={onAdd}
      ></input>
    </div>
  );
};

export default AddButton;
