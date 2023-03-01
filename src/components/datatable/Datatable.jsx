import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {BookingRow,BookingCols} from "../../datasrc"


function Datatable() {
  
  const action=[

    {
      field:"action",
      headerName:"Action",
      width:150,
      renderCell:()=>{
        return (
          <div className="action">
            <div className="edit">Edit</div>
            <div className="delete">Delete</div>
          </div>
        )
      }
    }
  ]
  return (    
    <div className="datatable">
    <DataGrid className="data"
        
        rows={BookingRow} 
        columns={BookingCols.concat(action)}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable