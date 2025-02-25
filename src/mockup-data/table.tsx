import React from "react";

export const TableData = {
  headers: ["Name", "Job", "Age", "Action"],
  rows: [
    {
      id: 1,
      cells: [
        "John Doe",
        "Software Engineer",
        "28",
        <button key="action-1" className="btn btn-xs">
          Edit
        </button>,
      ],
    },
    {
      id: 2,
      cells: [
        "Jane Smith",
        "Product Manager",
        "32",
        <button key="action-2" className="btn btn-xs">
          Edit
        </button>,
      ],
    },
    {
      id: 3,
      cells: [
        "Mike Johnson",
        "Designer",
        "25",
        <button key="action-3" className="btn btn-xs">
          Edit
        </button>,
      ],
    },
  ],
};