import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
const SortTaskSelect = (props) => {
  return (
    <StyledSortTaskSelect>
      <FontAwesomeIcon icon={faSort} />
      <select>
        <option value="" disabled hidden>
          Sort By
        </option>
        <option value="createdTime">建立時間</option>
        <option value="category">分類</option>
      </select>
    </StyledSortTaskSelect>
  );
};

const StyledSortTaskSelect = styled.div`
  display:inline-block;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border:1px solid black;
  
  select {
      border:0;
      background-color:transparent;
      outline:none;
    
    }
    option{
        border-radius:5px;
    }
`;

export default SortTaskSelect;
