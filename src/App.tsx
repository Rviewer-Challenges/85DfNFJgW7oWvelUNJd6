import { BottomNav, TopBar } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <TopBar />
        <div className="h-[1px] bg-[#2F3336]"></div>
        <div className="flex min-h-[48px] items-center justify-center text-[15px] font-light text-[#1D9BF0]">Show 46 posts</div>
        <div className="h-[1px] bg-[#2F3336]"></div>

        <BottomNav />
      </div>
    </>
  );
}

export default App;
