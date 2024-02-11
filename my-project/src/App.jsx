import './App.css'
import Layout from './Layout/Layout';
import PriceList from './pages/PriceList';

function App() {

  return (
    <>
      <div className='h-screen'>


        <Layout >
          <PriceList />
        </Layout>
      </div>

    </>
  )
}

export default App
