import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Table from 'rc-table';
import GuestTable from './GuestTable';
import { Button, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const columns = [
  {
    // title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    // title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    // title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    // title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <a href="#">Details</a>,
  },
];




/*
1. grab req.para id
2. build function
3.Test


*/
// function DeleteGuest(){
//   const [users, setUsers] = useState([]); 
// const pressHandler = (id) => {
//   fetch(`/paradise/guests/${id}`, {
//     method: 'GET'
//   })
//   fetch(`/paradise/guests/${id}`, {
//     method: 'DELETE'
//   })
//     .then(() => {

//       // Issue GET request after item deleted to get updated list
//       // that excludes user of id
//       return fetch('/paradise/guests')
//     })
//     .then(res => res.json())
//     .then(res => {
//       setUsers(res);
//     })
// }
// }



export default function HomePage() {

  
  


    function loadProject(){
      fetch('/paradise/guests')
      .then((Response)=> Response.json())
      .then((data)=> setGuestList(data))
    }
    
    const[saveGuestList, setGuestList] = useState([]);
    useEffect(()=>{loadProject()});




     
    return (
        // <div className={"search-page-search-page-wrapper"}>
        <div className={"search-page-search-page"}>
        
          <header className={"search-page-header"}>
            <div className={"search-page-overlap-group2"}>
              <h1 className={"search-page-paradise"}>
                <span className={"search-page-text-wrapper"}>Para</span>
                <span className={"search-page-span"}>dise</span>

                <span className={"search-page-text-wrapper-2"}>&nbsp;</span>
              </h1>
              <img className={"search-page-line-3"} src={"line-3.svg"} />
            </div>
            <div className={"search-page-frame"}>
              <div className={"search-page-overlap-group"}>
                <input className={"search-page-search"} />
                <div className={"search-page-overlap-group1"}>
                  <div className={"search-page-rectangle"} />
                  <div className={"search-page-div"}>Search</div>
                </div>
              </div>
            </div>
          </header>
          
          {/* <Attendee attendeemap={saveAttendee}/> */}

          <div className={"search-page-body-list"}>
            <div className={"search-page-overlap-group6"}>
            {/* <div className={"search-page-rectangle-3"} /> */}
            {/* <div className={"search-page-jacques-kabeya"}>{attendee.name}</div>
            <img className={"search-page-img"} src={process.env.PUBLIC_URL+ attendee.image} alt="placeholder image" /> 
            <img className={"search-page-img"} src={process.env.PUBLIC_URL+ "/assets/images/uncle.jpg"} alt="placeholder image" /> */}

         

          {/* <Table columns={columns} data={saveGuestList} /> */}
          {/* <GuestTable /> */}

          </div>

</div>























          {/* <div className={"search-page-body-list"}>
            <div className={"search-page-overlap-group6"}>
              <div className={"search-page-rectangle-3"} />
              <div className={"search-page-jacques-kabeya"}>Jacques Kabeya</div>
              <img className={"search-page-img"} src={"1x1-s-4.png"} />
            </div>
            <div className={"search-page-overlap-group4"}>
              <div className={"search-page-rectangle-4"} />
              <div className={"search-page-yves-laroche"}>Yves Laroche</div>
              <img className={"search-page-img"} src={"images-1-1-1.png"} />
            </div>
            <div className={"search-page-overlap-group9"}>
              <div className={"search-page-rectangle-5"} />
              <div className={"search-page-vincent-rogers"}>Vincent Rogers</div>
              <img className={"search-page-img-2"} src={"dan-jpsp2-3-custom-98d6a8ae1900e40a374e983be220f91b7ead7c13-s11.png"} />
            </div>
            <div className={"search-page-overlap-group7"}>
              <div className={"search-page-rectangle-6"} />
              <img className={"search-page-img"} src={"589dbb873149a101788b4c85-1-1.png"} />
              <div className={"search-page-clayton-karis"}>Clayton Karis</div>
            </div>
            <div className={"search-page-overlap-group3"}>
              <div className={"search-page-rectangle-7"} />
              <img className={"search-page-img-2"} src={"9e0a3262-2-810x541-1.png"} />
              <div className={"search-page-cayla-martin"}>Cayla Martin</div>
            </div>
            <div className={"search-page-overlap-group10"}>
              <div className={"search-page-rectangle-8"} />
              <img className={"search-page-element-s"} src={"1x1-s-1.png"} />
              <div className={"search-page-omar-washington"}>Omar Washington</div>
            </div>
            <div className={"search-page-overlap-group8"}>
              <div className={"search-page-rectangle-9"} />
              <img className={"search-page-img-2"} src={"1x1-s-2.png"} />
              <div className={"search-page-haley-campbell"}>Haley Campbell</div>
            </div>
            <div className={"search-page-overlap-group5"}>
              <div className={"search-page-rectangle-10"} />
              <img className={"search-page-img-2"} src={"1x1-s-2.png"} />
              <div className={"search-page-adder-rollen"}>Adder Rollen</div>
            </div>
            
          </div> */}
          <div className={"search-page-guestdetails"}>
            <div className={"search-page-overlap-group11"}>
              <div className={"search-page-rectangle-11"} />
              <div className={"search-page-rectangle-16"} />
              <div className={"search-page-comment"}>Comment</div>
              <img className={"search-page-element-1x1-s-5"} src={"1x1-s-5.png"} />
              <div className={"search-page-rectangle-14"} />
              <div className={"search-page-reservation-details"}>Reservation Details</div>
              <p className={"search-page-full-name-john-doe"}>Full Name : John Doe</p>
              <div className={"search-page-reservation-code"}>Reservation Code : MJ202</div>
              <div className={"search-page-email-johndoe-gmail-com"}>Email: johndoe@gmail.com</div>
              <div className={"search-page-meeting-time-EST"}>Meeting Time: 12PM EST</div>
              <div className={"search-page-group-campbell"}>Group: Campbell</div>
            </div>
          </div>
        </div>
      // </div>
);

  };