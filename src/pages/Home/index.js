import Header from "../../components/Header";
import background from "../../assets/background2.png"
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/> 
        <div className="info">
          <input name="usuario" placeholder="@username" />
          <button>Buscas</button>
        </div>
        <div>
          <img src="" className="profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
