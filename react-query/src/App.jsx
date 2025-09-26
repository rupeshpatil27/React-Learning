import './App.css'
import Products from './component/Products'
import Searchbar from './component/Searchbar'
// import User from './component/user'

function App() {


  return (
    <div className="w-full h-full">
      {/*  <User /> */}  {/* basics of react query */}

      <div className='mt-20 max-w-lg w-full m-auto flex flex-col items-center'>
        <Searchbar />
      </div>

      <Products />
    </div>
  )
}

export default App
