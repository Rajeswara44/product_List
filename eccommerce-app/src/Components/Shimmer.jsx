// src/Components/Shimmer.jsx
import React from "react";

export default function Shimmer({ count = 8 }) {
  return (
    <div className="row">
      {Array.from({ length: count }).map((_, i) => (
        <div className="col-md-3 mb-4" key={i}>
          <div className="card shadow-sm p-3">
            <div className="bg-light" style={{ height: "200px" }}></div>
            <div className="p-2">
              <div className="bg-light mb-2" style={{ height: "20px", width: "80%" }}></div>
              <div className="bg-light mb-2" style={{ height: "20px", width: "60%" }}></div>
              <div className="bg-light" style={{ height: "20px", width: "40%" }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
