
import { Navbar } from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"hola mundo"}/>

    </div>
  );
}

export default App;