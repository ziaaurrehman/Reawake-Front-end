import React, { useState } from "react";
import AddNewTask from "../Components/AddNewTask";
const DocPage = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isOpen, setIsOpen] = useState(-1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleAddView = (index) => {
    if (isOpen === index) {
      return setIsOpen(-1);
    } else {
      setIsOpen(index);
    }
  };
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
  ];
  return (
    <>
      <div className="doc_Page">
        <div className="doc_header">
          <div className="header_child_1">
            <div className="title_Doc">Welcome back,</div>
            <div className="user_name pl-2">Alina</div>
          </div>

          <div className="header_child_2">
            <div className="d-flex pr-2 fff">
              <div>
                <img
                  className="setting pr-2"
                  src="/images/seetingicon.svg"
                  alt=""
                />
              </div>
              <img className="cale " src="/images/calender.svg" alt="" />
              <div className="title_Doc pl-3">19 May 2023</div>
              <img className="pl-3" src="/images/Profile.svg" alt="" />
            </div>
          </div>
        </div>
        
        <div className="flex_icons">
          <div
            className={toggleState === 1 ? "active" : "active2"}
            onClick={() => toggleTab(1)}
          >
            <img className="pr-2" src="/images/dash.svg" alt=""></img>
            Dashboard
          </div>
          <div
            className={toggleState === 2 ? "active" : "active2"}
            onClick={() => toggleTab(2)}
          >
            <img className="pr-2" src="/images/add.svg" alt=""></img>
            Add view
          </div>
        </div>

        <div className="card_flex_dash">
          {data.map((obj, i) => (
            <div className="card_dash">
              <div className="fisrt_f">
                <div className="">To do (4)</div>
                <div onClick={() => toggleAddView(i)} className="d-flex">
                  <img className="pr-2" src="/images/add.svg" alt=""></img>
                  <div className="dropdown">
                    <button class="">Add new task</button>
                    {isOpen === i ? (
                      <div className="dropdown-content block">
                        <AddNewTask setIsOpen={setIsOpen} isOpen={isOpen} />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="main_f">
                <div className="child_nxt">
                  <div>
                    <div>Lorem Ipsum</div>
                    <div>Alina</div>
                  </div>
                  <img className="" src="/images/More.svg" alt=""></img>
                </div>
                <img className="d_img" src="/images/Progress.svg" alt="" />
                <div className="child_nxt">
                  <div>
                    <button className="date_btnn">5 Dec 2023</button>
                  </div>
                  <div className="d-flex">
                    <div className="">
                      <img src="/images/mssg.svg" alt="" />
                      <div>4</div>
                    </div>

                    <div>
                      <img src="/images/attech.svg" alt="" />
                      <div>2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="card_dash">
            <div className="fisrt_f">
              <div className="">To do (4)</div>
              <div className="d-flex">
                <img className="pr-2" src="/images/add.svg" alt=""></img>
                <div>Add new task</div>
              </div>
            </div>
            <div className="main_f">
              <div className="child_nxt">
                <div>
                  <div>Lorem Ipsum</div>
                  <div>Alina</div>
                </div>
                <img className="" src="/images/More.svg" alt=""></img>
              </div>
              <img className="d_img" src="/images/Progress.svg" alt="" />
              <div className="child_nxt">
                <div>
                  <button className="date_btnn">5 Dec 2023</button>
                </div>
                <div className="d-flex">
                  <div className="">
                    <img src="/images/mssg.svg" alt="" />
                    <div>4</div>
                  </div>

                  <div>
                    <img src="/images/attech.svg" alt="" />
                    <div>2</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="card_dash">
            <div className="fisrt_f">
              <div className="">To do (4)</div>
              <div className="d-flex">
                <img className="pr-2" src="/images/add.svg" alt=""></img>
                <div>Add new task</div>
              </div>
            </div>
            <div className="main_f">
              <div className="child_nxt">
                <div>
                  <div>Lorem Ipsum</div>
                  <div>Alina</div>
                </div>
                <img className="" src="/images/More.svg" alt=""></img>
              </div>
              <img className="d_img" src="/images/Progress.svg" alt="" />
              <div className="child_nxt">
                <div>
                  <button className="date_btnn">5 Dec 2023</button>
                </div>
                <div className="d-flex">
                  <div className="">
                    <img src="/images/mssg.svg" alt="" />
                    <div>4</div>
                  </div>

                  <div>
                    <img src="/images/attech.svg" alt="" />
                    <div>2</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="card_flex_dash">
          <div className="card_dash">
            <div className="fisrt_f">
              <div className="">To do (4)</div>
              <div className="d-flex">
                <img className="pr-2" src="/images/add.svg" alt=""></img>
                <div>Add new task</div>
              </div>
            </div>
            <div className="main_f">
              <div className="child_nxt">
                <div>
                  <div>Lorem Ipsum</div>
                  <div>Alina</div>
                </div>
                <img className="" src="/images/More.svg" alt=""></img>
              </div>
              <img className="d_img" src="/images/Progress.svg" alt="" />
              <div className="child_nxt">
                <div>
                  <button className="date_btnn">5 Dec 2023</button>
                </div>
                <div className="d-flex">
                  <div className="">
                    <img src="/images/mssg.svg" alt="" />
                    <div>4</div>
                  </div>

                  <div>
                    <img src="/images/attech.svg" alt="" />
                    <div>2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_dash">
            <div className="fisrt_f">
              <div className="">To do (4)</div>
              <div className="d-flex">
                <img className="pr-2" src="/images/add.svg" alt=""></img>
                <div>Add new task</div>
              </div>
            </div>
            <div className="main_f">
              <div className="child_nxt">
                <div>
                  <div>Lorem Ipsum</div>
                  <div>Alina</div>
                </div>
                <img className="" src="/images/More.svg" alt=""></img>
              </div>
              <img className="d_img" src="/images/Progress.svg" alt="" />
              <div className="child_nxt">
                <div>
                  <button className="date_btnn">5 Dec 2023</button>
                </div>
                <div className="d-flex">
                  <div className="">
                    <img src="/images/mssg.svg" alt="" />
                    <div>1</div>
                  </div>

                  <div>
                    <img src="/images/attech.svg" alt="" />
                    <div>5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_dash">
            <div className="fisrt_f">
              <div className="">To do (4)</div>
              <div className="d-flex">
                <img className="pr-2" src="/images/add.svg" alt=""></img>
                <div>Add new task</div>
              </div>
            </div>
            <div className="main_f">
              <div className="child_nxt">
                <div>
                  <div>Lorem Ipsum</div>
                  <div>Alina</div>
                </div>
                <img className="" src="/images/More.svg" alt=""></img>
              </div>
              <img className="d_img" src="/images/Progress.svg" alt="" />
              <div className="child_nxt">
                <div>
                  <button className="date_btnn">5 Dec 2023</button>
                </div>
                <div className="d-flex">
                  <div className="">
                    <img src="/images/mssg.svg" alt="" />
                    <div>5</div>
                  </div>

                  <div>
                    <img src="/images/attech.svg" alt="" />
                    <div>12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default DocPage;
