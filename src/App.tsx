import { useState } from "react";
import PlaceholderLoadingComponent from "./components/PlaceholderLoadingComponent";
import Button from "./components/Button";
import BackButton from "./components/BackButton";
import InfiniteScrollComponent from "./components/InfiniteScrollComponent";

type ViewType = "ph" | "inf";

function App() {
  const [view, setView] = useState<ViewType | undefined>();
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      {view ? <div className="w-full"><BackButton onClick={() => setView(undefined)}></BackButton></div> : null}
      {view ? (
        <>
          {view === "inf" && <InfiniteScrollComponent />}
          {view === "ph" && <PlaceholderLoadingComponent />}
        </>
      ) : (
        <div className="flex flex-col">
          <Button onClick={() => setView("ph")}>place holder</Button>
          <Button onClick={() => setView("inf")}>infinite scroll</Button>
        </div>
      )}
    </div>
  );
}

export default App;
