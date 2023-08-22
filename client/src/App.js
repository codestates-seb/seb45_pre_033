import React,{useState} from 'react';
import { styled } from 'styled-components';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import UserPage from './pages/UserPage';
import Companies from './pages/Companies';
import QuestionsListPage from './pages/QuestionsListPage';
import QuestionSubmit from './pages/QuestionSubmit';
import MyPage from './pages/MyPage';

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
  margin-top: 56px;
  min-height: 650px;
`


function App() {
  const [myInfor, setMyInfor] = useState(false);
  return (
    <>
      {myInfor ? (
        <Body>
          <Header setMyInfor={setMyInfor} />
          <ContentBody>
            <Container>
              <Sidebar />
              <Routes>
                <Route exact path="/question" element={<QuestionsListPage myInfor={myInfor} />} />
                <Route path="/users" element={<UserPage myInfor={myInfor} />} />
                <Route path="/groups" element={<Companies/>} />
                <Route path="/questionsubmit" element={<QuestionSubmit myInfor={myInfor} />} />
                <Route path="/question/:id" element={<QuestionPage myInfor={myInfor} />} />
                <Route path="/mypage" element={<MyPage myInfor={myInfor} setMyInfor={setMyInfor} />} />
              </Routes>
            </Container>
          </ContentBody>
          <Footer />
        </Body>
      ) : (
        <MainPage setMyInfor={setMyInfor} />
      )}
    </>
  );
}

export default App;
