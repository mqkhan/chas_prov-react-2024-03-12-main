import React, { useState } from "react";

export default function Panel({ title, collapsible, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <div>
      <h2>{title}</h2>
      {collapsible && <button onClick={toggle}>togglebutton</button>}
      {!collapsed && children}
    </div>
  );
}
