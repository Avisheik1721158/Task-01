import './App.css';
import Input from './component/Input/Input';
import Home1 from './component/Menu/Home1/Home1';

function App() {

  return (
    // <div class="navbar bg-base-100">
    //   {/* <div class="flex-1">
    //     <a class=" normal-case text-primary text-3xl font-bold">Yamak<span class='text-accent text-bold text-3xl'>.ai</span></a>
    //   </div> */}
    //   <div class="flex-none">
    //     <div class="dropdown dropdown-end">
    //       <label tabindex="0" class="btn btn-ghost btn-circle">
    //         <div class="indicator">
    //           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    //           <span class="badge badge-sm indicator-item">8</span>
    //         </div>
    //       </label>

    //       <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
    //         <div class="card-body">
    //           <span class="font-bold text-lg">8 Items</span>
    //           <span class="text-info">Subtotal: $999</span>
    //           <div class="card-actions">
    //             <button class="btn btn-primary btn-block">View cart</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="dropdown dropdown-end">
    //       <label tabindex="0" class="btn btn-ghost btn-circle avatar">
    //         <div class="w-10 rounded-full">
    //           <img src="https://placeimg.com/80/80/people" />
    //         </div>
    //       </label>
    //       <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    //         <li>
    //           <a class="justify-between">
    //             Profile
    //             <span class="badge">New</span>
    //           </a>
    //         </li>
    //         <li><a>Settings</a></li>
    //         <li><a>Logout</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div>

      <div class="navbar shadow-2xl bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Marketing</a></li>
              <li><a>Social Media</a></li>
              <li><a>Sales Copy</a></li>
              <li><a>Blogs</a></li>
              <li><a>Others</a></li>


            </ul>
          </div>
          <div class="flex-1">
            <a class=" normal-case text-primary text-3xl font-bold">Yamak<span class='text-accent text-bold text-3xl'>.ai</span></a>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>Home</a></li>
            <li><a>Marketing</a></li>
            <li><a>Social Media</a></li>
            <li><a>Sales Copy</a></li>
            <li><a>Blogs</a></li>
            <li><a>Others</a></li>

          </ul>
          <div class="flex-none">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg xmlns="https://www.svgrepo.com/show/358277/sync.svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span class="badge badge-sm indicator-item">7</span>
                </div>
              </label>
              <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                  <span class="font-bold text-lg">8 Items</span>
                  <span class="text-info">Subtotal: $999</span>
                  <div class="card-actions">
                    <button class="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown dropdown-end navbar-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      <Home1></Home1>
      <Input></Input>

    </div>



  );
}

export default App;
