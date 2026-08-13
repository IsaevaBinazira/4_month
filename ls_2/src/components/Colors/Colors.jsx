const Colors = () => {
    const viewColorFn = (item) => {
        console.log(item);
    };
    const list = ["green", "red", "yellow", "black", "white"];
  return (
    <div>
       {
        list.map((item)=>{
            return <button onClick={() => viewColorFn(item)}>
                {item} </button>
        })
       }
    </div>
  );
};        

export default Colors;
   
