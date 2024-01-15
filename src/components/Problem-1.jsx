import React, { useState } from "react";

const Problem1 = () => {
  const [textList, setTextList] = useState([]);
  const [show, setShow] = useState("all");

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextList([...textList, { name, status }]);
    setName("");
    setStatus("");
  };

  const handleInputChange = (event, inputNumber) => {
    const value = event.target.value;
    if (inputNumber === 1) {
      setName(value);
    } else if (inputNumber === 2) {
      setStatus(value);
    }
  };

  const statusOrder = { active: 1, completed: 2, pending: 3 };

  const final =
    show == "all" &&
    textList.sort((a, b) => {
      return statusOrder[a.status] - statusOrder[b.status];
    });

  const activeCompletedList =
    show == "active"
      ? textList.filter((list) => list.status == "active")
      : textList.filter((list) => list.status == "completed");

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                value={name}
                name="name"
                onChange={(e) => handleInputChange(e, 1)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                value={status}
                name="status"
                onChange={(e) => handleInputChange(e, 2)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show == "all"
                ? textList.map((list, idx) => {
                    return (
                      <tr key={idx}>
                        <td scope="col">{list.name}</td>
                        <td scope="col">{list.status}</td>
                      </tr>
                    );
                  })
                : activeCompletedList.map((list, idx) => {
                    return (
                      <tr key={idx}>
                        <td scope="col">{list.name}</td>
                        <td scope="col">{list.status}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
