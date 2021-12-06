import React from "react";
import NavBar from "../NavBar";
const DisplayDashBoard = (props) => {
  const { data, deleteData, updateData, handleView, viewPosts } = props;
  return (
    <div>
      <div style={{ marginBottom: 100 }}>
        <NavBar />
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Image</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list, index) => (
              <tr key={list.id}>
                <td>{index + 1}</td>
                <td>{list.title}</td>
                <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>
                  <img
                    src={list.picture}
                    alt="not found"
                    style={{ height: 100, width: 100 }}
                  ></img>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleView(list.id)}
                  >
                    view
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateData(list)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(list.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => viewPosts(list.id)}
                  >
                    View Posts
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayDashBoard;
