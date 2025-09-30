import "./App.css";
import StockTicker from "./component/StockTicker";
// import User from './component/user'
// import Products from './component/Products'
// import Searchbar from './component/Searchbar'
// import UserPostsPageManual from "./component/UserPostsPageManual";
import UserPostsPageDynamic from "./component/UserPostsPageDynamic";

function App() {
  return (
    <div className="w-full h-full">

      {/* basics of react query */}
      {/*  <User /> */} 


      {/* Advanced React Query - pagination, search, and filters */}
      {/* <div className='fixed top-0 w-full py-3 bg-white z-40'>
        <div className='max-w-lg w-full m-auto flex flex-col items-center'>
          <Searchbar />
        </div>
      </div>

      <div className='mt-20'>
        <Products />
      </div> */}


      {/* Advanced React Query - Manual Parallel Queries */}
      {/* <UserPostsPageManual/> */}

    
      {/* Advanced React Query - Dynamic Parallel Queries */}
      {/* <UserPostsPageDynamic/> */}


      {/* Advanced React Query - Polling */}
      <StockTicker/>
      
    </div>
  );
}

export default App;
