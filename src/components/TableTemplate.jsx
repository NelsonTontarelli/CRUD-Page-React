import "../styles/TableTemplate.css";
import { useState } from "react";
import CreateForm from "./CreateForm";
import DeleteIcon from '@mui/icons-material/Delete';

function TableTemplate({ titles, rows, sendData, deleteData }) {
  const [createButton, setCreateButton] = useState(false);
  
  function deleteDataTable(index) {
    deleteData(index);
  }

  return (
    <>
      <div className="div-table-tmp-container">
        {createButton ? (
          <CreateForm
            titles={titles}
            changeCreateBtn={setCreateButton}
            sendDataF={sendData}
          />
        ) : (
          <>
            <button
              onClick={() => setCreateButton(!createButton)}
              className="create-btn"
            >
              Create
            </button>
            <table className="table-tmp">
              <thead>
                <tr>
                  {titles.map((title) => (
                    <th key={title.key}>{title.val}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.id}>
                    {Object.keys(row).map((key) => (
                      <td key={key}>{row[key]}</td>
                    ))}
                    <DeleteIcon className="trash-icon" onClick={() => deleteDataTable(index)} />
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default TableTemplate;
