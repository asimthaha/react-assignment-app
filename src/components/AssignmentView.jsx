import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentNavbar from "./AssignmentNavbar";

const AssignmentView = () => {
  const [isLoading, changeLoading] = useState(true);

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/view/").then((response) => {
      changeData(response.data);
      changeLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData =()=>{
  //       isLoading(false);
  //   }

  return (
    <>
      <AssignmentNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                {isLoading ? (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Teacher</th>
                        <th scope="col">Description</th>
                        <th scope="col">File Type</th>
                        <th scope="col">last Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, index) => {
                        return (
                          <tr>
                            <th scope="row">{value.name}</th>
                            <td>{value.subject}</td>
                            <td>{value.teacher}</td>
                            <td>{value.description}</td>
                            <td>{value.fileType}</td>
                            <td>{value.lastDate}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentView;
