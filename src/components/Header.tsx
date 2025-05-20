import { ReactComponent as VscodeIcon } from "../icons/vscode.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import styled from "styled-components";
export default function Header() {
  const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run'];
  return (
    <HeaderBar>
      <VscodeIcon width={16} height={16} style={{marginRight:'8px'}}/>
      {
        menuItems.map((item, index) => (
          <MenuItem key={index}>
            {item}
          </MenuItem>
        ))
      }
      <MenuSearchBar  style={{ margin: "0 auto" }}>
      </MenuSearchBar>
      <div>

      </div>
    </HeaderBar>
    // <header className="header">
    //   <button className="header-search">
    //     <SearchIcon className="search-icon" />
    //     <span>Search</span>
    //   </button>
    // </header>
  );
}

const HeaderBar = styled.div`
  border-radius: 5px 5px 0px 0px;
  padding: 0px 5px 0px 5px;
  width: 100%;
  border-bottom: 1px solid #292929;
  height: 30px;
  background-color: #1f1e1e;
  align-items: center;
  display: flex;
`

const MenuItem = styled.div`
  padding: 0px 5px 0px 5px;
  align-items: center;
  cursor: default;
  display: flex;
  border-radius: 4px;
  height: 18px;
  &:hover{
    background-color: #363636;
  }
  `

const MenuSearchBar = styled.div`
  padding: 0px 5px 0px 5px;
  background-color: #2A2A2A;
  cursor: pointer;
  align-items: center;
  display: flex;
  border-radius: 4px;
  margin: auto 0px;

  max-width: 550px;
  text-align: center;
  justify-content: center;
  height: 18px;
  width: 40%;
  border: 1px solid #454545;
  &:hover{
    filter: brightness(115%);
  }
`