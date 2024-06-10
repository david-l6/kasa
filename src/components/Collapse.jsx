import PropTypes from "prop-types";
import { useState } from "react";
import arrow from "../assets/images/arrow.svg";

export default function Collapse({ title, content }) {
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
      <p className={`collapse_content ${isCollapsed ? '' : 'show'}`}>
        {content}
      </p>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
