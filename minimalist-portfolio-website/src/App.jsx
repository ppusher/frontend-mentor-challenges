import { Routes, Route } from  'react-router-dom';
import { Home, Portfolio, Contact } from './pages'
import { Footer, Header, Project, PortfolioDefault } from './components'
import { OuterWrapper, MainWrapper, FooterWrapper } from './App.styles.js'

function App() {
  return (
    <OuterWrapper>
        <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route index element ={<PortfolioDefault />} />
            <Route path=":projectname" element={<Project />} />
          </Route>
          <Route path="/contact" element={<Contact />}  />
          <Route path="*" element={<p>There's nothing here</p>} />
        </Routes>
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </ OuterWrapper>
  )
}

export default App
