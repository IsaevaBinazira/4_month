import React from 'react'
import './style.css'
import imgCross from '../../../assets/cross.jpeg'
const ViewUsers = () => {
  const viewUsersList = [
    {
      img: imgCross,
      name: "Adidas",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 1,

    },
     {
      img: imgCross,
      name: "Nike",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 2,

    }, {
      img: imgCross,
      name: "Puma",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 3,

    }, {
      img: imgCross,
      name: "Reebok",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 4,

    }, {
      img: imgCross,
      name: "Nike",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 5,

    }, {
      img: imgCross,
      name: "Adidas",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 6,

    }, {
      img: imgCross,
      name: "Puma",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 7,

    }, {
      img: imgCross,
      name: "Converse",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 8,

    }, {
      img: imgCross,
      name: "Adidas",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 9,

    }, {
      img: imgCross,
      name: "Nike",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 10,

    }, {
      img: imgCross,
      name: "Puma",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 11,

    }, {
      img: imgCross,
      name: "Reebok",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 12,

    }, {
      img: imgCross,
      name: "New Balance",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 13,

    }, {
      img: imgCross,
      name: "Converse",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 14,

    }, {
      img: imgCross,
      name: "Adidas",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 15,

    }, {
      img: imgCross,
      name: "Nike",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 16,

    }, {
      img: imgCross,
      name: "Puma",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 17,

    }, {
      img: imgCross,
      name: "Reebok",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 18,

    }, {
      img: imgCross,
      name: "New Balance",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 19,

    }, {
      img: imgCross,
      name: "Converse",
      color: "white",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      id: 20,

    }

  ]
  return (
    <div className='MainBlock'>
      {viewUsersList.map((item,index) => {
        return (
          <div key={item.id} className='block' 
          onClick={() => console.log(item)}>
            <img src={item.img} alt="Cross" />
            <h5>{item.name}</h5>
            <p>{item.color}</p>
            <p>{item.text}</p>
        {index < 10 && (
       <span className='premium'>Премиум</span>
        )}
       </div>
    )
  }
 )}
</div>
  
  );
};

export default ViewUsers






