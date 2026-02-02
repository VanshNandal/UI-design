import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Card, CardContent } from '@mui/material';


function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)' }}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <span className="navbar-brand mb-0 h1">My App</span>
      </nav>

      <div className="container mt-4">
        {/* Bootstrap Form */}
        <h3 className="text-center">Bootstrap UI Demo</h3>
        <div className="card p-4 mt-3" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)' }}>
          <input className="form-control" placeholder="Enter name" style={{ marginBottom: 16 }} />
          <button className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
        </div>

        {/* Card-Based Layout */}
        <h3 className="mt-5 text-center">Card-Based Layout</h3>
        <div className="row mt-3">
          <div className="col-md-4 mb-3">
            <div className="card p-4">Card 1</div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-4">Card 2</div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-4">Card 3</div>
          </div>
        </div>

        {/* Material UI Section */}
        <h3 className="mt-5 text-center">Material UI Form</h3>
        <Card className="mui-card" style={{ width: 340, margin: '24px auto', padding: 8 }}>
          <CardContent>
            <TextField label="Name" fullWidth margin="normal" variant="outlined" sx={{ background: '#fff', borderRadius: 1 }} />
            <Button variant="contained" fullWidth sx={{ mt: 2 }} style={{ background: 'linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)', fontWeight: 600 }}>
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
