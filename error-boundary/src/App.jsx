import './App.css'
import ErrorBoundary from './component/ErrorBoundary'
import UserList from './component/UserList'
// import Welcome from './component/Welcome'

function App() {

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-[60%] w-[60%] bg-gray-200 flex flex-col items-center justify-start overflow-y-scroll'>

        <h1 className='text-4xl font-extrabold mt-2'>Error Boundary</h1>

        {/* <ErrorBoundary>
            <Welcome/>
          </ErrorBoundary> */}

        <ErrorBoundary>
          <UserList />
        </ErrorBoundary>

      </div>
    </div>
  )
}

export default App
