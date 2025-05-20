import styled from "styled-components";

export default function Footer() {
  return <FooterComponent>
    <FooterTap></FooterTap>
    <FooterBar>
      ssssssss
    </FooterBar>
    
  </FooterComponent>
}

const FooterBar = styled.div`
  border-top: 1px solid #292929;
  height: 20px;
  width: 100%;
  position: relative;
  bottom: 0;
  background-color: #181818;
  align-items: center;
  display: flex;
`

const FooterTap = styled.div`
    border-top: 1px solid #292929;
  height: 50px;
  width: 100%;
  position: relative;
  bottom: 0;
  background-color: #181818;
  align-items: center;
  display: flex;
`

const FooterComponent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  align-items: center;
  display: flex;
`