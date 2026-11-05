import { useState } from "react";

const list = [
    { id: 1, name: "Parent 1", parentId: null },
    { id: 2, name: "Child 1.1", parentId: 1 },
    { id: 6, name: "Child 1.1.1", parentId: 2 },
    { id: 7, name: "Child 1.1.2", parentId: 2 },
    { id: 3, name: "Child 1.2", parentId: 1 },
    { id: 4, name: "Parent 2", parentId: null },
    { id: 5, name: "Child 2.1", parentId: 4 },
  ];

  const getChildren=(partendId,list)=>{
    return list.filter((e)=>e.parentId==partendId)
  }

  const List=({item, originalList})=>{
    const [open,setopen]=useState(false)
    const {name, id}=item;
    const childrenList = getChildren(id,list)

    const openIndicator=open ?"":"^";
    const icon = childrenList.length ? openIndicator:"*"

    return (
        <div>
            <span onClick={()=>setopen(!open)}>{icon}{name}</span>
            {open &&<div style={{paddingLeft:"10px"}}>{childrenList.map((item)=> <List item={item} key={item.id} originalList={originalList}/>)} </div>}
        </div>
    )
  }

const NestedAccordian=()=>{
    const rootItems=getChildren(null,list)
    return(
        <>
        <h3>Accordian</h3>
        <h4>https://www.youtube.com/watch?v=MrnmhYy5IoA&t=1s</h4>
        <div>
            {rootItems.map((item)=> <List item={item} key={item.id} originalList={list}/>)}
        </div>
        </>
    )
}

export default NestedAccordian