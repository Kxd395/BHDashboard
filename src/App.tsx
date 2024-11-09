import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { FacilityList } from './components/FacilityList';

function App() {
  return (
    <div className="h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-auto">
          <SearchBar />
          <FacilityList />
        </main>
      </div>
    </div>
  );
}

export default App;