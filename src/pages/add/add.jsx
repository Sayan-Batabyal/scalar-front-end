import Sidebar from "../../components/sidebar/Sidebar";
import "./add.scss";
import { DateRange } from 'react-date-range'; 
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Add = () => {
  const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ]);

  return (
    <div className="add">
      <Sidebar/>
      <div className="addContainer">
        <div className="top">
         <h1>Add New Booking</h1>
        </div>    
        <div className="bottom">
        

          <form >
            <div className="details">
            <div className="formInput">
              <label>Full Name</label>
              <input type="text" placeholder="Sayan Batabyal" />
            </div>
            
            <div className="formInput">
              <label>Email</label>
              <input type="email" placeholder="sayan@gmail.com" />
            </div>
            
            <div className="formInput">
              <label>Room Number</label>
              <input type="text" placeholder="Selected Room" disabled/>
              <button className="roomList">Select Rooms</button>
            </div>

            <div className="formInput">
              <label>Price</label>
              <input type="text" placeholder="INR" disabled/>
            </div>
            </div>
            <div className="formInput">
              <label>Duration</label>
              <div className="date">
              <DateRange 
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={['#3E54AC','#3E54AC','#3E54AC']}
              />
              </div>
            </div>
          </form>
          <button className="submit">Finish Booking</button>
        </div>
        
      </div>
    </div>
  )
}


export default Add