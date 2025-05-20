import styled from "styled-components";

export default function DefaultButton(props: {
    clickUnderLine?: boolean;
    style?: React.CSSProperties;
    active?: boolean;
    onClick?: () => void;
    contents: string;
}) {
    return <Button style={props.style} clickUnderLine={props.clickUnderLine ?? false} onClick={props.onClick} active={props.active}>
        {props.contents}
        </Button>
}

const Button = styled.button<{clickUnderLine: boolean, active?: boolean}>`
    background-color: transparent;
    color: #9b9898; 
    font-size: 11px;
    font-weight: 500;
    font-family: "Segoe";
    border-bottom: ${(props) => (props.active ? "1px solid #026EC1" : "none")};
    filter: ${(props) => (props.active ? "brightness(1.3)" : "none")};
    &:hover{
        filter: brightness(120%);
    }
`
