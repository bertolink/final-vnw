import Header from "./components/Header"
import Routes from "./routes/routes"
import ContextProvider from "./context/ContextProvider"

function App() {

  return (
      <ContextProvider>
      <Header />
      <Routes />
      </ContextProvider>
  )
}

export default App
