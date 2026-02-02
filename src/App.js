import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Card, CardContent } from '@mui/material';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My App</span>
      </nav>

      <div className="container mt-4">
        {/* Bootstrap Form */}
        <h3 className="text-center">Bootstrap UI Demo</h3>
        <div className="card p-3 mt-3">
          <input className="form-control" placeholder="Enter name" />
          <button className="btn btn-primary mt-3">Submit</button>
        </div>

        {/* Card-Based Layout */}
        <h3 className="mt-5 text-center">Card-Based Layout</h3>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card p-3">Card 1</div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">Card 2</div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">Card 3</div>
          </div>
        </div>

        {/* Material UI Section */}
        <h3 className="mt-5 text-center">Material UI Form</h3>
        <Card style={{ width: 300, margin: '20px auto' }}>
          <CardContent>
            <TextField label="Name" fullWidth margin="normal" />
            <Button variant="contained" fullWidth>
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
