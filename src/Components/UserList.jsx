import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import MyButton from "./MyButton";
import {Card} from 'react-bootstrap';


function UserList() {
  const data = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState();
  const fetch = async (userNo) => {
    const userData = await axios.get(`https://reqres.in/api/users/${userNo}`);
    setCurrentUser(userData.data.data);
  };

  const defText = "Click on the respective button for getting the user's info";
  
  return (
    <div className="container">
      <Card style={{"width": "18rem"}} className="container border-0 shadow my-4">
        {currentUser && <Card.Img variant="top" src={currentUser.avatar} />}
        <Card.Body>
          {currentUser && <><Card.Title>Name</Card.Title><Card.Text>{currentUser.first_name + " " + currentUser.last_name}</Card.Text></>}
          {!currentUser && <Card.Title>{defText}</Card.Title>}
          {currentUser && <><Card.Title>Email</Card.Title><Card.Text>{currentUser.email}</Card.Text></>}
        </Card.Body>
      </Card>
      <MyButton onClick={fetch} total={data.total}></MyButton>
    </div>
  );
}

export default UserList;
