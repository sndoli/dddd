
import React from "react";
import "./App.css";

const Dashboard = () => {
  const data = [
    { label: "Total Sales", value: "22,500", icon: "📊" },
    { label: "Cash Sales", value: "5,500", icon: "🛒" },
    { label: "Due Sales", value: "5,500", icon: "💳" },
    { label: "Total Expense", value: "2,500", icon: "💰" },
    { label: "Overall Balance", value: "9,000", icon: "📦" },
  ];

  return (
    <div className="dashboard">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="icon">{item.icon}</div>
          <div className="label">{item.label}</div>
          <div className="value">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
