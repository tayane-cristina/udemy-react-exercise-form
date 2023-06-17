import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <Form user={{name:"Márcia", email: "marcia@gmail.com", bio:"Operadora de caixa", role:"user"}}/>
    </div>
  );
}

export default App;
