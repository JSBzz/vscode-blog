import { ReactComponent as FoldDownIcon } from "../icons/arrow-circle-down.svg";
import React, { useState } from "react";
import SideNavMenuFilesTree from "./SideNavMenuFilesTree";

const example = [
  { type: "folder", name: "blog", isOpen: false, child: [] },
  {
    type: "folder",
    name: "jsb",
    isOpen: false,
    child: [
      { type: "file", name: "dev" },
      {
        type: "folder",
        name: "react",
        child: [{ type: "folder", name: "nextjs", isOpen: false }],
      },
    ],
  },
  { type: "file", name: "trash" },
];

export default function SideNavMenuFiles() {
  return (
    <div className="files-body">
      <div className="files-top-container">
        EXPLORER
      </div>
      <div className="files-bottom-container">
        <label
          htmlFor="files-fold-trigger"
          className="files-bottom-title"
          tabIndex={0}
        >
          <FoldDownIcon />
          VSCODE-BLOG
        </label>
        <input
          type="checkbox"
          id="files-fold-trigger"
          className="files-fold-trigger"
        />
          <div className="files-bottom-tree">
          <SideNavMenuFilesTree/>
          </div>
      </div>
    </div>
  );
}
