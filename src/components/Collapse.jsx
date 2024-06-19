import PropTypes from "prop-types";
import { useState } from "react";
import arrow from "../assets/images/arrow.svg";

export default function Collapse({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <div className="collapse_title" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img 
          src={arrow} 
          alt="Flèche" 
          className={isCollapsed ? 'collapsed' : 'expanded'} 
        />
      </div>
      <div className={`collapse_content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        {children}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
