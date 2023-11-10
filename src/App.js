import AddNewResource from './components/AddNewResource';
import Layout from './components/Layout'
import ResourceViewer from './components/ResourceViewer';
import Header from './components/Header'
import './App.css';


function App() {
  return (
    <div>
      <Layout>
        <Header/>
        <ResourceViewer />
        <AddNewResource />
      </Layout>
    </div>
  );
}

export default App;
