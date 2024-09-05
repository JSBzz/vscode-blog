import { ReactComponent as FoldDownIcon } from "../icons/arrow-circle-down.svg";
import React, { useState } from "react";
import SideNavMenuFilesObject from "./SideNavMenuFilesObject";

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

export default function SideNavMenuFilesTree() {
  const [tree, setTree] = useState(example); // file explorer
  return (  <SideNavMenuFilesObject folderChild={tree} tree={tree} level={1}/>)
}


// import { ReactComponent as FoldDownIcon } from "../icons/arrow-circle-down.svg";
// import React, { useState } from "react";

// const example = [
//   { type: "folder", name: "blog", isOpen: false, child: [] },
//   {
//     type: "folder",
//     name: "jsb",
//     isOpen: false,
//     child: [
//       { type: "file", name: "dev" },
//       {
//         type: "folder",
//         name: "react",
//         child: [{ type: "folder", name: "nextjs", isOpen: false }],
//       },
//     ],
//   },
//   { type: "file", name: "trash" },
// ];

// export default function SideNavMenuFilesTree() {
//   const [tree, setTree] = useState(example); // file explorer
//   console.log(tree);
//   const style = (level: number) => {
//     return { "margin-left": `${10 * level}px` } as React.CSSProperties;
//   };

//   return (
//         <div className="files-bottom-tree">
//           {tree.map((data, idx) => {
//             let level = 1;
//             if (data?.type == "file") {
//               return (
//                 <div
//                   className={`files-bottom files-bottom-file`}
//                   style={style(level)}
//                 >
//                   {data?.name}
//                 </div>
//               );
//             } else if (data?.type == "folder") {
//               if (data.isOpen) {
//                 return (
//                   <div
//                     className={`files-bottom files-bottom-folder`}
//                     style={style(level)}
//                     onClick={() => {
//                       tree[idx].isOpen = !tree[idx].isOpen;
//                       setTree([...tree]);
//                     }}
//                   >
//                     {data?.name}
//                     {data?.child?.map((data) => {
//                       return <div>asdasd</div>;
//                     })}
//                   </div>
//                 );
//               } else {
//                 return (
//                   <div
//                     className={`files-bottom files-bottom-folder`}
//                     style={style(level)}
//                     onClick={() => {
//                       tree[idx].isOpen = !tree[idx].isOpen;
//                       setTree([...tree]);
//                     }}
//                   >
//                     {data?.name}
//                   </div>
//                 );
//               }
//             }
//           })}
//         </div>
//   );
// }
