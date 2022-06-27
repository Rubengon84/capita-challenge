import css from "./App.module.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
