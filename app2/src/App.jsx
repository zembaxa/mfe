import { useContext } from "react";
import "./App.css";
import { CountContext } from "./CountContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function App() {
  const { count, setCount } = useContext(CountContext);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>Application 2</h3>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </CardActions>
    </Card>
  );
}

export default App;
