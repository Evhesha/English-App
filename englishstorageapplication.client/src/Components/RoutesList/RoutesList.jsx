import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate
} from "react-router-dom";

import LessonsListPage from "../../pages/Lessons/LessonsListPage/LessonsListPage";
import OnlineLessonsListPage from "@/pages/Lessons/OnlineLessonsListPage/OnlineLessonsListPage.jsx";

import PresentSimple from "/src/pages/Lessons/PresentSimple";
import FutureSimple from "/src/pages/Lessons/FutureSimple";
import PastSimple from "/src/pages/Lessons/PastSimple";
import PresentContinuous from "../../pages/Lessons/PresentContinuous";
import PastContinuous from "../../pages/Lessons/PastContinuous";
import FutureContinuous from "../../pages/Lessons/FutureContionuous";
import PresentPerfect from "../../pages/Lessons/PresentPerfect";
import PastPerfect from "../../pages/Lessons/PastPerfect";
import FuturePerfect from "../../pages/Lessons/FuturePerfect";
import PresentPerfectContinuous from "../../pages/Lessons/PresentPerfectContinuous";
import FuturePerfectContinuous from "../../pages/Lessons/FuturePerfectContinuous";
import PastPerfectContinuous from "../../pages/Lessons/PastPerfectContionuous";

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

import ByLevelTestPage from "../../pages/Tests/By level/ByLevelTestPage";
import A0 from "../../pages/Tests/By level/ByLevelTests/A0";
import A1 from "../../pages/Tests/By level/ByLevelTests/A1";
import A2 from "../../pages/Tests/By level/ByLevelTests/A2";
import B1 from "../../pages/Tests/By level/ByLevelTests/B1";
import B2 from "../../pages/Tests/By level/ByLevelTests/B2";
import C1 from "../../pages/Tests/By level/ByLevelTests/C1";
import C2 from "../../pages/Tests/By level/ByLevelTests/C2";

import ByTopicsPage from "../../pages/Tests/By topics/ByTopicsPage";
import PresentSimpleTest from "../../pages/Tests/By topics/ByTopicsTests/PresentSimpleTest";
import FutureSimpleTest from "../../pages/Tests/By topics/ByTopicsTests/FutureSimpleTest";
import PastSimpleTest from "../../pages/Tests/By topics/ByTopicsTests/PastSimpleTest";
import PresentContinuousTest from "../../pages/Tests/By topics/ByTopicsTests/PresentContinuousTest";

import MixedTestsPage from "../../pages/Tests/Mixed/MixedTestsPage";
import MixedTest1 from "../../pages/Tests/Mixed/MixedTests/MixedTest1";
import MixedTest2 from "../../pages/Tests/Mixed/MixedTests/MixedTest2";
import MixedTest3 from "../../pages/Tests/Mixed/MixedTests/MixedTest3";


function RoutesList() {
  return (
    <>
      <Routes>
        // Link to default page
        <Route path="/" element={<Navigate to="/home" />} />

        // Navbar
        <Route path="/about-app" element={<AboutApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/setting-page" element={<SettingPage />} />

        // Sidebar
        // Sidebar.Lessons
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

        //Sidebar.Dictionary
        <Route path="/topics-page" element={<TopicsPage />}/>
        <Route path="/my-dict-page" element={<MyDictPage />}/>
        <Route path="/thousamd-popular" element={<ThousandPopular />}/>
        <Route path="/words-in-parts" element={<WordsInParts />}/>

        //Sidebar.Dictioranary.Topics
        <Route path="/traveling-topic" element={<Traveling />}/>
        <Route path="/cooking-topic" element={<Cooking />}/>
        <Route path="/shopping-topic" element={<Shopping />}/>
        <Route path="/sport-topic" element={<Sport />}/>
        <Route path="/programming-topic" element={<Programming />}/>
        <Route path="/nature-topic" element={<Nature />}/>
        <Route path="/work-topic" element={<Work />}/>

        //Sideber.Tests
        <Route path="/level-tests" element={<ByLevelTestPage />}/>
        <Route path="/A0-test" element={<A0 />}/>
        <Route path="/A1-test" element={<A1 />}/>
        <Route path="/A2-test" element={<A2 />}/>
        <Route path="/B1-test" element={<B1 />}/>
        <Route path="/B2-test" element={<B2 />}/>
        <Route path="/C1-test" element={<C1 />}/>
        <Route path="/C2-test" element={<C1 />}/>

        <Route path="/topics-tests" element={<ByTopicsPage />}/>
        <Route path="/present-simple-test" element={<PresentSimpleTest />}/>
        <Route path="/future-simple-test" element={<FutureSimpleTest />}/>
        <Route path="/past-simple-test" element={<PastSimpleTest />}/>
        <Route path="/present-continuous-test" element={<PresentContinuousTest />}/>

        <Route path="/mixed-tests" element={<MixedTestsPage />}/>
        <Route path="/mixed-test-1" element={<MixedTest1 />}/>
        <Route path="/mixed-test-2" element={<MixedTest2 />}/>
        <Route path="/mixed-test-3" element={<MixedTest3 />}/>
        
        // Footer

      </Routes>
    </>
  );
}

export default RoutesList;
