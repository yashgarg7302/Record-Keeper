import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { Header } from "./components/Header";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [data, setData] = useState([]);
  
  const addData = () => {
      setData([...data, {
        Name: Name,
        Email: Email
      }]);
      setName("");
      setEmail("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);  
    setData([...arr]);
  };


  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={Name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
          <div className="data_val">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {
            data.map((element, index) => {
            return (
              <div key={index} className="data_val">
              <h4>{element.Name}</h4>
              <h4>{element.Email}</h4>
              <Stack>
              <Button onClick={() => removeItem(index)} variant="contained" color="error">
                <DeleteIcon />
              </Button>
              </Stack>
              
            </div>
            );
          })
          }
      </div>
    </div>
  );
}

export default App;
