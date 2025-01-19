import styled from 'styled-components';

const TypeButton = styled.button`
padding: 10px 25px;
border: 2px solid #3498db;
border-radius: 8px;
background: ${(props) => (props.active ? "#3498db" : "transparent")};
color: ${(props) => (props.active ? "#fff" : "#3498db")};
font-size: 1rem;
font-weight: 600;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.2);
}

&:active {
  transform: translateY(0);
}
`;

export default TypeButton;