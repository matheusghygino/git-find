import Header from "../../components/Header";
import background from "../../assets/background2.png";
import "./styles.css";
import ItemList from "../../components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="" className="profile" alt="foto de perfil" />
            <div>
              <h3>Matheus Hygino</h3>
              <span>@matheusghygino</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList 
              title="Teste1"
              description="teste de descrição"
            />
            <ItemList 
              title="Teste1"
              description="teste de descrição"
            />
            <ItemList 
              title="Teste1"
              description="teste de descrição"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
