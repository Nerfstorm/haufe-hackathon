import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function TopPanel() {
  return (
    <div className="top-panel">
      Drama Share
    </div>
  );
}

function RefPanel({
  title = "Greatest Dramatic Story",
  subtitle = "Star Wars Force Sleeps",
  reviewer = "Nerfstorm",
  rating = "6.5/10",
  review = "Loved it, idk.",
  link1 = "Link 2 Movie",
  link2 = "Link 2 Location",
  likes = "123 👍",
  imageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/7ee097d12e08a09eb0d92a1cd8d12d5002601bcd58e27a874cb2e305a9bd2364?"
}) {
  return (
    <div className="py-5 pr-6 pl-2.5 rounded-3xl border-4 border-amber-600 bg-slate-700 max-w-[580px] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <div className="flex gap-3 items-start self-start ml-5 max-md:ml-2.5">
              <div className="flex flex-col text-xl font-bold leading-5">
                <div className="text-yellow-500">{title}</div>
                <div className="mt-5 text-amber-600">{subtitle}</div>
              </div>
              <div className="flex flex-col mt-5 whitespace-nowrap">
                <div className="text-xl font-semibold leading-5 text-center text-amber-600">
                  {reviewer}
                </div>
                <div className="flex gap-2 self-end px-2 py-1 mt-6 text-sm font-bold text-yellow-500 rounded-3xl bg-black bg-opacity-20">
                  <img
                    loading="lazy"
                    src={imageUrl}
                    className="shrink-0 self-start w-3.5 aspect-square fill-yellow-500"
                  />
                  <div>{rating}</div>
                </div>
              </div>
            </div>
            <div className="items-start px-5 pt-1.5 pb-16 mt-5 text-xs font-bold leading-5 text-amber-600 rounded-3xl bg-black bg-opacity-20">
              {review}
            </div>
            <div className="flex gap-5 mt-5 text-sm font-bold leading-5 text-center text-yellow-500">
              <div className="justify-center px-5 py-1.5 rounded-3xl bg-black bg-opacity-20">
                {link1}
              </div>
              <div className="justify-center px-5 py-1.5 rounded-3xl bg-black bg-opacity-20">
                {link2}
              </div>
              <div className="justify-center px-5 py-1 rounded-3xl bg-black bg-opacity-20">
                {likes}
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
    <div className="gradient-background flex flex-col items-center justify-center h-screen">
      <TopPanel />
      <div className="scrollable-panel">
        <RefPanel
          title="Epic Adventure"
          subtitle="The Return of the King"
          reviewer="Movie Buff"
          rating="9.8/10"
          review="Absolutely fantastic!"
          link1="Watch Trailer"
          link2="Find Theater"
          likes="456 👍"
          imageUrl="https://example.com/image1.jpg"
        />
        <RefPanel
          title="Romantic Comedy"
          subtitle="Love Actually"
          reviewer="Cinema Lover"
          rating="8.5/10"
          review="Heartwarming and funny."
          link1="Watch Trailer"
          link2="Find Theater"
          likes="789 👍"
          imageUrl="https://example.com/image2.jpg"
        />
        <RefPanel
          title="Sci-Fi Thriller"
          subtitle="Inception"
          reviewer="Film Critic"
          rating="9.0/10"
          review="Mind-bending experience."
          link1="Watch Trailer"
          link2="Find Theater"
          likes="123 👍"
          imageUrl="https://example.com/image3.jpg"
        />
        <RefPanel
          title="Epic Adventure"
          subtitle="The Return of the King"
          reviewer="Movie Buff"
          rating="9.8/10"
          review="Absolutely fantastic!"
          link1="Watch Trailer"
          link2="Find Theater"
          likes="456 👍"
          imageUrl="https://example.com/image1.jpg"
        />
      </div>
    </div>
  );
}

export default App;
