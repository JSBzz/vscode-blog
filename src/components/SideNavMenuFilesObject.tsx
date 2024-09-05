import { ReactComponent as FoldDownIcon } from "../icons/arrow-circle-down.svg";
import React, { useState } from "react";

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


export default function SideNavMenuFilesObject(props:{folderChild:any[], tree:any, level:number}) {
  const [child, setChild] = useState<any>({}); // file explorer
  // console.log(tree);
  const style = (level: number) => {
    return { "margin-left": `${10 * level}px` } as React.CSSProperties;
  };

  return (
          <>
          {props.folderChild?.map((data:any, idx:any) => {
            if (data?.type == "file") {
              return (
                <div
                  className={`files-bottom files-bottom-file`}
                  style={style(props.level)}
                >
                  {data?.name}
                </div>
              );
            } else if (data?.type == "folder") {
                return (
                  <>
                  <div
                    className={`files-bottom files-bottom-folder`}
                    style={style(props.level)}
                    onClick={() => {
                      console.log(props.level)
                      props.folderChild[idx].isOpen = !props.folderChild[idx].isOpen;
                      if(props.folderChild[idx].isOpen){
                        setChild({...child, [idx] : <SideNavMenuFilesObject folderChild={data.child} tree={props.tree} level={props.level+1}/>})
                      }else{
                        setChild({...child, [idx]: <></>})
                      }
                    }}
                  >
                    {data?.name}
                  </div>
                    {child?.[idx]}
                    </>
                );
            }
          })}
          </>
  );
}
