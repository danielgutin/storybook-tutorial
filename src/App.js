import './App.css';
import Badge from './components/Badge/Badge';

function App() {
  return (
    <div className="App">
      <Badge 
        type="success" 
        text='Hello Success' 
        size='sm'
      />
      <Badge 
        type="warning" 
        size='md'
        text='Hello Warning' 
      />
      <Badge 
        fullWidth
        type="error" 
        size='lg'
        text='Hello Error' 
      />
    </div>
  );
}

export default App;
