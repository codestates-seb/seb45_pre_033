import React,{useState} from 'react';
import { styled } from 'styled-components';
import './App.css';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

const Body = styled.div`
  width: 100vw;
`
const ContentBody = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1280px;
  display: flex;
`


function App() {
  const [myInfor, setMyInfor] = useState(true);
  return (
    <>
      {myInfor?<Body>
      <Header />
        <ContentBody>
        <Container>
            <Sidebar />
            <QuestionPage />
        </Container>
        </ContentBody>
        <Footer />
      </Body>:<MainPage setMyInfor={setMyInfor}/>}
    </>
  );
}

export default App;
