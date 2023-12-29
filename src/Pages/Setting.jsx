import React from "react";

const Setting = () => {
  return (
    <div className="bg_img">
      <div className="setting_icon">
        <img src="/images/Group 3.svg" alt="" />
      </div>
      <div className="content_part setting_part">
        <img className="setting_img" src="/images/Group 389.svg" alt="" />
        <div className="fields_flex justify_content">
          <div className="item_fields pr_4">
            <div className="pb-4 pr_4">
              <label for="fname">First name</label>
              <br></br>
              <input
                className="input_cls"
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="pb_4">
              <label for="lname">Last name:</label>
              <br></br>
              <input
                className="input_cls"
                type="text"
                id="lname"
                name="lname"
              />
            </div>
          </div>
          <div>
            <div className="pb-4">
              <label for="fname">Email</label>
              <br></br>
              <input
                className="input_cls"
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <label for="lname">Phone No</label>
            <br></br>
            <input className="input_cls" type="text" id="lname" name="lname" />
          </div>
        </div>
        <div className="fields_flex pt-0">
          <div className="item_fields_2 justify_content">
            <div className="pr-4 pb_4">
              <label for="fname">Password</label>
              <br></br>
              <input
                className="input_cls"
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="pb_4 cpad">
              <label for="lname">Confirm Password</label>
              <br></br>
              <input
                className="input_cls"
                type="text"
                id="lname"
                name="lname"
              />
            </div>
          </div>
        </div>
        <div className=" btn_setting">
          <button className="signup_btn setting_btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
