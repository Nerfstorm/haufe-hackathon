import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function RefPanel() {
  return (
    <div className="py-5 pr-6 pl-2.5 rounded-3xl border-4 border-amber-600 bg-slate-700 max-w-[580px] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <div className="flex gap-3 items-start self-start ml-5 max-md:ml-2.5">
              <div className="flex flex-col text-xl font-bold leading-5">
                <div className="text-yellow-500">Greatest Dramatic Story</div>
                <div className="mt-5 text-amber-600">
                  Star Wars Force Sleeps
                </div>
              </div>
              <div className="flex flex-col mt-5 whitespace-nowrap">
                <div className="text-xl font-semibold leading-5 text-center text-amber-600">
                  Nerfstorm
                </div>
                <div className="flex gap-2 self-end px-2 py-1 mt-6 text-sm font-bold text-yellow-500 rounded-3xl bg-black bg-opacity-20">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ee097d12e08a09eb0d92a1cd8d12d5002601bcd58e27a874cb2e305a9bd2364?"
                    className="shrink-0 self-start w-3.5 aspect-square fill-yellow-500"
                  />
                  <div>6.5/10</div>
                </div>
              </div>
            </div>
            <div className="items-start px-5 pt-1.5 pb-16 mt-5 text-xs font-bold leading-5 text-amber-600 rounded-3xl bg-black bg-opacity-20">
              Loved it, idk.
            </div>
            <div className="flex gap-5 mt-5 text-sm font-bold leading-5 text-center text-yellow-500">
              <div className="justify-center px-5 py-1.5 rounded-3xl bg-black bg-opacity-20">
                Link 2 Movie
              </div>
              <div className="justify-center px-5 py-1.5 rounded-3xl bg-black bg-opacity-20">
                Link 2 Location
              </div>
              <div className="justify-center px-5 py-1 rounded-3xl bg-black bg-opacity-20">
                123 👍
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="grow shrink-0 max-w-full shadow-sm aspect-[0.68] w-[145px] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App flex flex-col items-center justify-center h-screen">
      <div className="scrollable-panel max-h-[80vh] overflow-y-auto p-5 flex flex-col gap-5">
        <RefPanel />
        <RefPanel />
        <RefPanel />
        {/* Add more <MyComponent /> as needed */}
      </div>
    </div>
  );
}

export default App;