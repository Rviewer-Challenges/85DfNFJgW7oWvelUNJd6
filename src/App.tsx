import { BottomNav, TopBar } from "./components";
import { useScrollDirection } from "./hooks/useScrollDirection";

function App() {
  const [scrollDir] = useScrollDirection();
  console.log(scrollDir);

  return (
    <>
      <div className="container">
        <TopBar />
        <div className="h-[1px] bg-[#2F3336]"></div>
        <div className="flex min-h-[48px] items-center justify-center text-[15px] font-light text-[#1D9BF0]">Show 46 posts</div>
        <div className="h-[1px] bg-[#2F3336]"></div>

        <div className={`${scrollDir === "u" ? "opacity-1" : "opacity-40"} min-[500px]:hidden`}>
          <BottomNav />
        </div>
      </div>
    </>
  );
}

export default App;
