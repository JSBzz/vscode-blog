import { ReactComponent as FoldDownIcon } from "../icons/arrow-circle-down.svg";
export default function SideNavMenuFiles() {
  return (
    <div className="files-body">
      <div className="files-top"></div>
      <div className="files-bottom">
        <label htmlFor="files-fold-trigger" className="files-bottom-title" tabIndex={0}>
          <FoldDownIcon />
          HI
        </label>
        <input type="checkbox" id="files-fold-trigger" className="files-fold-trigger" />
        <div className="files-bottom-files"></div>
      </div>
    </div>
  );
}
