import Title from "./components/TitleMain/Title";
import './App.css'
import CardProcess from "./components/Main/CardProcess";
import { Layout } from "./components/Wrapper";
import ButtonCategories from "./components/Categories/ButtonCategories";


function App() {
  return (
  <>
    <Title/>
      <ButtonCategories/>  
        <Layout>
          <CardProcess/>
        </Layout>
  </>
  );
}

export default App;
