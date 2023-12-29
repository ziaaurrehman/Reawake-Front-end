import React from "react";

const AddNewTask = ({ setIsOpen }) => {
  return (
    <div className="new_task">
      <p>Add new task</p>
      <div className="task_input">
        <label htmlFor="taskName">Task name</label>
        <input type="text" />
      </div>
      <div className="task_input">
        <label htmlFor="taskStatus">Task status</label>
        <select name="taskStatus" id="taskStatus">
          <option value="">Select</option>
          <option value="">In Progress</option>
          <option value="">To do</option>
          <option value="">Completed</option>
        </select>
      </div>
      <div className="task_input">
        <label htmlFor="date">Due Date</label>
        <input type="date" />
      </div>

      <div className="remind">
        <label htmlFor="date">Reminder:</label>

        <div className="reminder">
          <div
            style={{ width: "50%", marginTop: "0px" }}
            className="task_input"
          >
            <input type="date" />
          </div>
          <div
            style={{ width: "50%", marginTop: "0px" }}
            className="task_input"
          >
            <input type="time" />
          </div>
        </div>
      </div>

      <div className="task_btn">
        <button onClick={() => setIsOpen(-1)}>Cancel</button>
        <button>Done</button>
      </div>
    </div>
  );
};

export default AddNewTask;
