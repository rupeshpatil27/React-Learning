import "./App.css";
// import User from './component/user'
// import Products from './component/Products'
// import Searchbar from './component/Searchbar'
// import UserPostsPageManual from "./component/UserPostsPageManual";
// import UserPostsPageDynamic from "./component/UserPostsPageDynamic";
// import StockTicker from "./component/StockTicker";
import TodoApp from "./component/TodoApp";

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
      {/* <StockTicker/> */}

      {/* advanced React Query features:
        - Dependent queries to fetch data based on results from other queries
        - Mutations for creating, updating, and deleting data
        - Background fetching indicators to show loading states during refetches
        - Query disabling/pausing to control auto-fetching behavior
        - Query invalidation for refetching after mutations or specific events
        - Optimistic updates for immediate UI feedback during mutations 
        - Added infinite scrolling using useInfiniteQuery */}
      <TodoApp />

    </div>
  );
}

export default App;
