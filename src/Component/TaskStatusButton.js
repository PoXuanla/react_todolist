import styled from "styled-components";

const TaskStatusButton = props => {
    return (
        <StyledTaskStatusButton>
            <button>未開始</button>
            <button>進行中</button>
            <button>已完成</button>

        </StyledTaskStatusButton>
    )
}
const StyledTaskStatusButton = styled.div`
    border-radius:5px;
    display:flex;
    button {
        background-color:transparent;
        border:1px solid black;
    }
    button:first-child{
        border-radius:5px 0 0 5px;
    }
    button:last-child{
        border-radius:0 5px 5px 0;
    }
    `
export default TaskStatusButton;