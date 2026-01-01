import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import ChatContainer from "../ChatContainer/ChatContainer";
import LessonsListPage from "../../pages/Lessons/LessonsListPage/LessonsListPage";
import OnlineLessonsListPage from "@/pages/Lessons/OnlineLessonsListPage/OnlineLessonsListPage.jsx";

import PresentSimple from "../../pages/Lessons/Lessons/PresentSimple.jsx";
import FutureSimple from "../../pages/Lessons/Lessons/FutureSimple";
import PastSimple from "../../pages/Lessons/Lessons/PastSimple";
import PresentContinuous from "../../pages/Lessons/Lessons/PresentContinuous";
import PastContinuous from "../../pages/Lessons/Lessons/PastContinuous";
import FutureContinuous from "../../pages/Lessons/Lessons/FutureContionuous";
import PresentPerfect from "../../pages/Lessons/Lessons/PresentPerfect";
import PastPerfect from "../../pages/Lessons/Lessons/PastPerfect";
import FuturePerfect from "../../pages/Lessons/Lessons/FuturePerfect";
import PresentPerfectContinuous from "../../pages/Lessons/Lessons/PresentPerfectContinuous";
import FuturePerfectContinuous from "../../pages/Lessons/Lessons/FuturePerfectContinuous";
import PastPerfectContinuous from "../../pages/Lessons/Lessons/PastPerfectContionuous";

import AboutApp from "/src/pages/Another/AboutApp";
import Home from "../Home/Home";
import AdminPanel from "../../pages/Another/AdminPanel";
import TeacherPage from "../../pages/Another/TeacherPage";

import TopicsPage from "../../pages/Dictionary/DictionaryTopicsPage/TopicsPage";
import ThousandPopular from "../../pages/Dictionary/ThousandPopular/ThousandPopular";
import WordsInParts from "../../pages/Dictionary/WordsInParts/WordsInParts";
import Traveling from "../../pages/Dictionary/CardWordsPages/Traveling";
import Sport from "../../pages/Dictionary/CardWordsPages/Sport";
import Programming from "../../pages/Dictionary/CardWordsPages/Programming";
import Nature from "../../pages/Dictionary/CardWordsPages/Nature";
import Work from "../../pages/Dictionary/CardWordsPages/Work";

import SignUp from "../../pages/SignUp && Login/SingUp";
import Login from "../../pages/SignUp && Login/Login";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import SettingPage from "../../pages/Another/SettingPage";

import MyDictPage from "../../pages/Dictionary/DictionaryTopicsPage/MyDictPage";

import Cooking from "../../pages/Dictionary/CardWordsPages/Cooking";
import Shopping from "../../pages/Dictionary/CardWordsPages/Shopping";

import ByTimeTestsPage from "@/pages/Tests/Pages/ByTimeTestsPage.jsx";
import ByLevelTestPage from "@/pages/Tests/Pages/ByLevelTestPage.jsx";
import ByTopicTestsPage from "@/pages/Tests/Pages/ByTopicTestsPage.jsx";

import DynamicTest from "@/pages/Tests/Components/DynamicTest.jsx";
import DynamicTopicTest from "@/pages/Tests/Components/DynamicTopicTest.jsx";
import DynamicTimeTest from "@/pages/Tests/Components/DynamicTimeTest.jsx";

function RoutesList() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Navbar */}
          <Route path="/about-app" element={<AboutApp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/setting-page" element={<SettingPage />} />

          {/* Sidebar */}
          <Route path="/chat" element={<ChatContainer />} />

          {/* Sidebar.Lessons */}
          <Route path="/list-lessons-page" element={<LessonsListPage />} />
          <Route path="/online-list-lessons-page" element={<OnlineLessonsListPage />} />

          <Route path="/present-simple" element={<PresentSimple />} />
          <Route path="/future-simple" element={<FutureSimple />} />
          <Route path="/past-simple" element={<PastSimple />} />
          <Route path="/present-continuous" element={<PresentContinuous />} />
          <Route path="/past-continuous" element={<PastContinuous />} />
          <Route path="/future-continuous" element={<FutureContinuous />} />
          <Route path="/present-perfect" element={<PresentPerfect />} />
          <Route path="/past-perfect" element={<PastPerfect />} />
          <Route path="/future-perfect" element={<FuturePerfect />} />
          <Route path="/present-perfect-continuous" element={<PresentPerfectContinuous />} />
          <Route path="/past-perfect-continuous" element={<PastPerfectContinuous />} />
          <Route path="/future-perfect-continuous" element={<FuturePerfectContinuous />} />

          {/* Sidebar.Dictionary */}
          <Route path="/topics-page" element={<TopicsPage />}/>
          <Route path="/my-dict-page" element={<MyDictPage />}/>
          <Route path="/thousamd-popular" element={<ThousandPopular />}/>
          <Route path="/words-in-parts" element={<WordsInParts />}/>

          {/* Sidebar.Dictionary.Topics */}
          <Route path="/traveling-topic" element={<Traveling />}/>
          <Route path="/cooking-topic" element={<Cooking />}/>
          <Route path="/shopping-topic" element={<Shopping />}/>
          <Route path="/sport-topic" element={<Sport />}/>
          <Route path="/programming-topic" element={<Programming />}/>
          <Route path="/nature-topic" element={<Nature />}/>
          <Route path="/work-topic" element={<Work />}/>

          {/* Sidebar.Tests */}
          <Route path="/level-tests" element={<ByLevelTestPage />} />
          <Route path="/mixed-tests" element={<ByTopicTestsPage />} />
          <Route path="/topics-tests" element={<ByTimeTestsPage />}/>

          <Route path="/test/level/:level" element={<DynamicTest />} />
          <Route path="/test/topic/:topic" element={<DynamicTopicTest />} />
          <Route path="/test/time/:time" element={<DynamicTimeTest />} />
          <Route path="/:level" element={<DynamicTest />} />
        </Routes>
      </>
  );
}

export default RoutesList;