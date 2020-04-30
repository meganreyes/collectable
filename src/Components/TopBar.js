import React from "react";
import { Link } from "react-router-dom";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    zIndex: 100,
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    color: "#ffff",
    backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    borderBottom: `1px solid transparent`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  };

  return (
    <div style={topBarStyle}>
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <span>{`🏠`}</span>
      </Link>
      Collectable!
      <Link to={`/collections`} style={{ textDecoration: "none" }}>
        <span>{`📁`}</span>
      </Link>
    </div>
  );
};

export default TopBar;
