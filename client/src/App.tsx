import { useState } from "react";
import { Header } from "./components/Header";
import { ProductListing } from "./components/ProductListing";
import AddForm from "./components/AddForm";

function App() {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const toggleAddForm = () =>
    setIsAddFormVisible(!isAddFormVisible);
  const closeAddForm = () => setIsAddFormVisible(false);

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing />
        <AddForm
          isVisible={isAddFormVisible}
          onToggle={toggleAddForm}
          onClose={closeAddForm}
        />
      </main>
    </div>
  );
}

export default App;
