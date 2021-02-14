import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";
{
  /* Put in different colour abbreviation after option as quick-text 
              New customer button that hides and then shows form
              QR code to scan to see how long you've been waiting
              Sorting by business and non-sale vs sale
              Have number of where they are in queue*/
}

const Form = ({ onAdd }) => {
  const [cxName, setName] = useState("");
  const [cxNumber, setNumber] = useState("");
  const [cxNotes, setNotes] = useState("");
  const [cxType, setType] = useState("");
  const [sale, setSale] = useState("");
  const [request, setRequest] = useState("");
  const [priority, setPriority] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!cxName) {
      alert("Customer name required");
      return;
    }

    onAdd({ cxName, cxNumber, cxNotes, cxType, sale, request, priority });

    setName("");
    setNumber("");
    setNotes("");
    setType("");
    setSale("");
    setRequest("");
    setPriority(false);
  };

  return (
    <>
      <div className="container-fluid my-3">
        <form
          id=""
          class="row g-0 align-items-center form-inline"
          onSubmit={onSubmit}
        >
          <div className="form-group col-md-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text border-0 ">
                  <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/man-raising-hand-medium-light-skin-tone_1f64b-1f3fc-200d-2642-fe0f.png"
                    style={{ width: "28px", height: "28px" }}
                  ></img>
                </div>
              </div>
              <input
                cxType="text"
                className="form-control border-0 shadow-none"
                placeholder="Customer name"
                value={cxName}
                onChange={(e) => setName(e.target.value)}
                name="cxName"
              ></input>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text border-0">
                  <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/271/keycap-number-sign_23-fe0f-20e3.png"
                    style={{ width: "28px", height: "28px" }}
                  ></img>
                </div>
              </div>
              <input
                cxType="text"
                class="form-control border-0 shadow-none"
                placeholder="Mobile number"
                value={cxNumber}
                onChange={(e) => setNumber(e.target.value)}
                name="cxNumber"
              ></input>
            </div>
          </div>

          <div class="form-group my-2">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text border-0">
                  <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/271/spiral-notepad_1f5d2-fe0f.png"
                    style={{ width: "28px", height: "28px" }}
                  ></img>
                </div>
              </div>
              <input
                cxType="text"
                class="form-control border-0 shadow-none"
                placeholder="Notes"
                value={cxNotes}
                onChange={(e) => setNotes(e.target.value)}
                name="cxNotes"
              ></input>
            </div>
          </div>

          <div class="col">
            <select
              className="form-select border-0 shadow-none"
              value={cxType}
              onChange={(e) => setType(e.target.value)}
              name="cxType"
            >
              <option>Customer Type</option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div class="col">
            <select
              className="form-select border-0 shadow-none custom-select"
              value={sale}
              id="main_menu"
              onChange={(e) => setSale(e.target.value)}
              name="sale"
            >
              <option >Sale?</option>
              <option value="sale">Sale </option>
              <option value="nonsale">Non-sale</option>
            </select>
          </div>

          <div class="col">
            <select
              className="form-select border-0 shadow-none"
              name="request"
              value={request}
              id="sub_menu"
              onChange={(e) => setRequest(e.target.value)}
              name="request"
            >
              {/* <option>Request</option>
              <option>Post-paid New</option>
              <option>Upgrade</option>
              <option>Mobile Broadband</option> */}
            </select>
          </div>
          <script src="dynamic.js"></script>

          <div className="col-auto form-check my-1">
            <label className="form-check-label">Priority</label>
            <input
              type="checkbox"
              className="form-check-input"
              checked={priority}
              value={priority}
              onChange={(e) => setPriority(e.currentTarget.checked)}
            />
          </div>

          <div className="container-fluid">
            <input
              type="submit"
              value="Save Customer"
              className="form-control border-0 btn btn-success"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
