//import components
import Header from './components/Header Block/index.js';
import Layout from './components/Layout Block/index.js';
import Footer from './components/Footer Block/index.js';
import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';


const App = () => {
  return (
    <>
      <Header
        title='Title'
        desc='description'
      />
      <Layout
        title='Title'
        desc='description'
        urlBg={bg1}
      />
      <Layout
        title='Title'
        desc='description'
        colorBg="red"
      />
      <Layout
        title='Title'
        desc='description'
        urlBg={bg2}
      />
      <Footer/>
    </>
  );
}

export default App;
