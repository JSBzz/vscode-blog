// SideNav.tsx
import { ReactComponent as FilesIcon } from "../icons/files.svg";
import { ReactComponent as SettingIcon } from "../icons/settings-gear.svg";
import { ReactComponent as PersonIcon } from "../icons/circle-large.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { useContext, useState } from "react";
import { SelectMenuContext } from "../context/SelectMenuContext";
import styled from "styled-components";
import SideNavMenu from "./SideNavMenu";
import Header from "./Header";
import DefaultButton from "./DefaultButton";

export default function SideNav() {
  const [ activeSideMenu, setActiveSideMenu ]  = useState<'Files' | 'Search' | 'Setting' | null>(null);
  const [ activeFooterMenu, setActiveFooterMenu ]  = useState<'PROBLEMS' | 'OUTPUT' | 'DEBUG CONSOLE' | 'TERMINAL' | 'COMMENTS' | null>(null);
  const FooterMenuItems = ['PROBLEMS', 'OUTPUT', 'DEBUG CONSOLE', 'TERMINAL', 'COMMENTS'];
  const [isOpen, setIsOpen] = useState(true);
  const SideBarMenus = [
    { component : <FilesIcon width={20} height={20}/>, key:'Files'}, 
    { component : <SearchIcon width={20} height={20}/>, key:'Search'},
    { component : <SettingIcon width={20} height={20}/>, key:'Setting'}, 
  ];

  const folders = [
    {
      fileId: 1,
      name: 'folder1',
      path: '/',
      type: 'dir',
      parentId: null,
    },
 
  ]

  

  return (
    <Wrapper>
      <Header/>
    <LeftBar>
      <MenuBar>
        {
          SideBarMenus.map((item, index) => (
            <MenuItem key={item.key} active={item.key === activeSideMenu} onClick={() => {
              setActiveSideMenu(item.key as 'Files' | 'Search' | 'Setting')}}>
              {item.component}
            </MenuItem>
          ))
        }
      </MenuBar>
      <ContentArea>
        <Content>
        <SideNavMenuBar>
          <SideNavMenuBarHeader>EXPLORER</SideNavMenuBarHeader>
          <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
            VSCODE-BLOG
          </div>
          <FolderWrapper isOpen={isOpen}> // 호버 바꿔야함!
          {
            folders.map(folder => (
              <FileComponent key={folder.fileId}> 
                <summary>{folder.name}</summary>
                <div>files</div>
                <FileComponent>
                  <summary>{folder.name}</summary>
                  <div>files</div>
                </FileComponent>
              </FileComponent>
            ))
          }
        </FolderWrapper>
          <div>TIMELINE</div>
     
        </SideNavMenuBar>
        <FooterComponent>
          <div style={{ flex: 1 }}>wwwww</div>
          <FooterHeader>
            {
              FooterMenuItems.map((item, index) => (
                <DefaultButton
                  key={index}
                  active={item === activeFooterMenu}
                  onClick={() => setActiveFooterMenu(item as 'PROBLEMS' | 'OUTPUT' | 'DEBUG CONSOLE' | 'TERMINAL' | 'COMMENTS')}
                  contents={item}
                  style={{ fontSize: 9, marginRight: 5, height: 20}}
                  clickUnderLine={true}
                  // onClick={() => menuClickHandler(item)}
                />
              ))
            }
          </FooterHeader>
          <FooterTap />
        </FooterComponent>
        </Content>
        
      </ContentArea>
    </LeftBar>
    <FooterBar>
    </FooterBar>
    </Wrapper>
  );
}


const LeftBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-right: 1px solid #292929;
`;

const FolderWrapper = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  padding: 5px;
`;

const FileComponent = styled.details`
  background-color: #181818;
  border-right: 1px solid #292929;
  flex-direction: column;
  display: flex;
  font-size: 10px;
  justify-content: center;
  padding: 0px 0px 0px 5px;
  &:hover {
    background-color: #2A2D2E;
  }
`;

const MenuBar = styled.nav`
  height: 100%;
  width: 40px;
  gap: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  border-right: 1px solid #292929;
`;

const SideNavMenuBarHeader = styled.div`
  font-size: 10px;
  color: #9b9898;
  height: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
  padding: 5px 5px 5px 10px;
  border-top: 1px solid #292929;
  background-color: #181818;
`

const MenuItem = styled.div<{active:boolean}>`
  padding: 5px 5px 5px 5px;
  align-items: center;
  justify-content: center;
  width: 25px;
  cursor: default;
  display: flex;
  border-left: ${(props: {active:boolean}) => (props.active ? "1px solid #026EC1" : "none")};
  filter:  ${(props: {active:boolean}) => (props.active ? "brightness(1.2)" : "none")};
  height: 30px;
  &:hover {
    filter: brightness(1.2);
  }
`


const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-right: 1px solid #292929;
`;

const SideNavMenuBar = styled.div`
  width: 400px;
  background-color: #181818;
  border-right: 1px solid #292929;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #1F1F1F;
  flex: 1; 
  min-height: 0;
`;

const FooterHeader = styled.div`
  background-color: #181818;
  height: 20px;
  padding: 5px 5px 5px 10px;
  border-top: 1px solid #292929;
`

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FooterTap = styled.div`
  height: 200px;
  width: 100%;
  background-color: #181818;
  display: flex;
  align-items: center;
`;

const FooterBar = styled.div`
  border-top: 1px solid #292929;
  height: 20px;
  width: 100%;
  background-color: #181818;
  align-items: center;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`
