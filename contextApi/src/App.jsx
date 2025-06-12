// import WelcomePage from "./Component/WelcomePage";
import './App.css'
import UserList from './Component/UserList';
import UserState from "./Context/user/UserState";

function App() {

  return (
    <UserState>
      <div className='h-screen w-full flex items-center justify-center'>
        <div className='h-full w-full p-[20] bg-neutral-300 flex flex-col items-center justify-center gap-6'>

          <h1 className='text-4xl font-extrabold'>Context api</h1>


          <div className='flex items-center justify-center gap-5'>
            {/* <WelcomePage /> */}

            <UserList />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App
