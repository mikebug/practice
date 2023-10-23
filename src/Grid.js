import React from "react";

const styles = {
  menubar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
  },
  sidebarAndBodyGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gridTemplateRows: "1fr",
    gridGap: "10px",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    color: "white",
    padding: "10px",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
    color: "white",
    padding: "10px",
  },
};

export default function Grid() {
  function collapseSidebar() {
    styles.sidebar.display = "none";
  }

  return (
    <div className="box">
      <div style={styles.menubar}>
        <div>Menu</div>
        <div>Search</div>
      </div>
      <div style={styles.sidebarAndBodyGrid}>
        <div style={styles.sidebar}>
          <button onClick={collapseSidebar}>Collapse</button>
          <div>toggle</div>
          <div>cards</div>
          <div>grid</div>
          <div>notes</div>
        </div>
        <div style={styles.body}>
          <div>body</div>
          <div>body</div>
          <div>body</div>
        </div>
      </div>
    </div>
  );
}
