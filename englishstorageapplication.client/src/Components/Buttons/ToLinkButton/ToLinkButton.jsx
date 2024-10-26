import { Link } from "react-router-dom";
import styled from 'styled-components';
import "../ToLinkButton/ToLinkButton.css"


function ToLinkButton({ link, placeholder }) {
  return (
    <StyledLink to={link}>
      <i className="bi bi-box-arrow-up-left"></i>
      <span className="tooltip">{placeholder}</span>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  background-color: #c0c0e5;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: relative;

  &:hover {
    background-color: #3498db;
    transform: scale(1.1);
  }

  .tooltip {
    visibility: hidden;
    width: auto;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 120%;
    margin-top: -12px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  i {
    line-height: 50px; /* Центрирование иконки внутри круга */
  }
`;

export default ToLinkButton;