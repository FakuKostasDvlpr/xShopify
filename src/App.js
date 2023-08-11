import Title from "./components/TitleMain/Title";
import './App.css'
import CardProcess from "./components/Main/CardProcess";
import { Layout } from "./components/Wrapper";
function App() {
  return (
  <>
    <Title/>
      <Layout>
        <CardProcess/>
      </Layout>
  </>
  );
}

export default App;
