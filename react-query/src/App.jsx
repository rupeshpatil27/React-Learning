import './App.css'
import Products from './component/Products'
import Searchbar from './component/Searchbar'
// import User from './component/user'

function App() {


  return (
    <div className="w-full h-full">
      {/*  <User /> */}  {/* basics of react query */}


      {/* Advanced React Query - pagination, search, and filters */}
      <div className='fixed top-0 w-full py-3 bg-white z-40'>
        <div className='max-w-lg w-full m-auto flex flex-col items-center'>
          <Searchbar />
        </div>
      </div>

      <div className='mt-20'>
        <Products />
      </div>

    </div>
  )
}

export default App
