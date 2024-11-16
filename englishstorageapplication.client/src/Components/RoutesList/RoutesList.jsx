import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate
} from "react-router-dom";

import LessonsListPage from "../../pages/Lessons/LessonsListPage/LessonsListPage";

import PresentSimple from "/src/pages/Lessons/PresentSimple";
import FutureSimple from "/src/pages/Lessons/FutureSimple";
import PastSimple from "/src/pages/Lessons/PastSimple";
import PresentContinuous from "../../pages/Lessons/PresentContinuous";
import PastContinuous from "../../pages/Lessons/PastContinuous";
import PresentPerfect from "../../pages/Lessons/PresentPerfect";
import PresentPerfectContinuous from "../../pages/Lessons/PresentPerfectContinuous";

import AboutApp from "/src/pages/Another/AboutApp";
import Home from "../Home/Home";
import AdminPanel from "../../pages/Another/AdminPanel";

import TopicsPage from "../../pages/Dictionary/DictionaryTopicsPage/TopicsPage";
import ThousandPopular from "../../pages/Dictionary/ThousandPopular/ThousandPopular";
import WordsInParts from "../../pages/Dictionary/WordsInParts/WordsInParts";
import Traveling from "../../pages/Dictionary/CardWordsPages/Traveling";

import SignUp from "../../pages/SignUp && Login/SingUp";
import Login from "../../pages/SignUp && Login/Login";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

import MyDictPage from "../../pages/Dictionary/DictionaryTopicsPage/MyDictPage";

import Cooking from "../../pages/Dictionary/CardWordsPages/Cooking";
import Shopping from "../../pages/Dictionary/CardWordsPages/Shopping";

import ByLevelTestPage from "../../pages/Tests/By level/ByLevelTestPage";
import ByTopicsPage from "../../pages/Tests/By topics/ByTopicsPage";
import TestCardLink from "../../pages/Tests/TestCardLink";
import MixedTestsPage from "../../pages/Tests/Mixed/MixedTestsPage";

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
        <Route path="/profile-page" element={<ProfilePage />} />

        // Sidebar
        // Sidebar.Lessons
        <Route path="/list-lessons-page" element={<LessonsListPage />} />

        <Route path="/present-simple" element={<PresentSimple />} />
        <Route path="/future-simple" element={<FutureSimple />} />
        <Route path="/past-simple" element={<PastSimple />} />
        <Route path="/present-continuous" element={<PresentContinuous />} />
        <Route path="/past-continuous" element={<PastContinuous />} />
        <Route path="/present-perfect" element={<PresentPerfect />} />
        <Route path="/present-perfect-continuous" element={<PresentPerfectContinuous />} />

        //Sidebar.Dictionary
        <Route path="/topics-page" element={<TopicsPage />}/>
        <Route path="/my-dict-page" element={<MyDictPage />}/>
        <Route path="/thousamd-popular" element={<ThousandPopular />}/>
        <Route path="/words-in-parts" element={<WordsInParts />}/>

        //Sidebar.Dictioranary.Topics
        <Route path="/traveling-topic" element={<Traveling />}/>
        <Route path="/cooking-topic" element={<Cooking />}/>
        <Route path="/shopping-topic" element={<Shopping />}/>

        //Sideber.Tests
        <Route path="/level-tests" element={<ByLevelTestPage />}/>
        <Route path="/topics-tests" element={<ByTopicsPage />}/>
        <Route path="/mixed-tests" element={<MixedTestsPage />}/>
        
        // Footer

      </Routes>
    </>
  );
}

export default RoutesList;
