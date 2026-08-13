import React from 'react';  

const SizeDress = () => {
    const viewSizeFn = (item) => {
        alert(item);
    };
    const list = ["s", "m", "l", "xl", "xxl"];
  return (
    <div>
       {
        list.map((item)=>{
            return <button onClick={() => viewSizeFn(item)}>
                {item} </button>
        })
       }
    </div>
  );
};    





export default SizeDress;