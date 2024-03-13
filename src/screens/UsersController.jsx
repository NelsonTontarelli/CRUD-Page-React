import { useState } from "react";
import TableTemplate from "../components/TableTemplate";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const usersTitles = [
  {
    val: "ID",
    key: 1,
  },
  {
    val: "Name",
    key: 2,
  },
  {
    val: "Description",
    key: 3,
  },
];

const usersData = [
];

function UsersController() {
  const [users, setUsers] = useState(usersData)

  function getData(data) {
    const prevId = usersData[usersData.length - 1]?.id || 0;
    const newData = { id: prevId + 1, ...data };
    usersData.push(newData);
    toast.success("Record Created Successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  }

  function getDataToDelete(index) {
    const updateUsers = [...users]
    updateUsers.splice(index,1)
    setUsers(updateUsers)
  }

  return (
    <>
    <TableTemplate titles={usersTitles} rows={users} sendData={getData} deleteData={getDataToDelete}></TableTemplate>
    </>
  );
}

export default UsersController;