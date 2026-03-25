import { Navigate, Route, Routes } from "react-router-dom";
import {
  AboutPage,
  AdminPage,
  ByLevelTestPage,
  ByTimeTestsPage,
  ByTopicTestsPage,
  Cooking,
  DynamicOnlineTest,
  DynamicTest,
  DynamicTimeTest,
  DynamicTopicTest,
  FutureContinuous,
  FuturePerfect,
  FuturePerfectContinuous,
  FutureSimple,
  GrammarDictionary,
  HomePage,
  LessonsListPage,
  LoginPage,
  MyDictPage,
  Nature,
  OnlineLessonPage,
  OnlineLessonsListPage,
  OnlineTestsListPage,
  PastContinuous,
  PastPerfect,
  PastPerfectContinuous,
  PastSimple,
  PopularWords,
  PresentContinuous,
  PresentPerfect,
  PresentPerfectContinuous,
  PresentSimple,
  ProfilePage,
  Programming,
  SettingsPage,
  Shopping,
  SignUpPage,
  Sport,
  TeacherPage,
  TopicsPage,
  Traveling,
  Work,
  ChatPage,
} from "@/pages";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/about-app" element={<AboutPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/teacher" element={<TeacherPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/setting-page" element={<SettingsPage />} />

      <Route path="/chat/:chatId" element={<ChatPage />} />

      <Route path="/list-lessons-page" element={<LessonsListPage />} />
      <Route
        path="/online-list-lessons-page"
        element={<OnlineLessonsListPage />}
      />
      <Route path="/lesson/:id" element={<OnlineLessonPage />} />
      <Route path="/present-simple" element={<PresentSimple />} />
      <Route path="/future-simple" element={<FutureSimple />} />
      <Route path="/past-simple" element={<PastSimple />} />
      <Route path="/present-continuous" element={<PresentContinuous />} />
      <Route path="/past-continuous" element={<PastContinuous />} />
      <Route path="/future-continuous" element={<FutureContinuous />} />
      <Route path="/present-perfect" element={<PresentPerfect />} />
      <Route path="/past-perfect" element={<PastPerfect />} />
      <Route path="/future-perfect" element={<FuturePerfect />} />
      <Route
        path="/present-perfect-continuous"
        element={<PresentPerfectContinuous />}
      />
      <Route
        path="/past-perfect-continuous"
        element={<PastPerfectContinuous />}
      />
      <Route
        path="/future-perfect-continuous"
        element={<FuturePerfectContinuous />}
      />

      <Route path="/topics-page" element={<TopicsPage />} />
      <Route path="/my-dict-page" element={<MyDictPage />} />
      <Route path="/traveling-topic" element={<Traveling />} />
      <Route path="/cooking-topic" element={<Cooking />} />
      <Route path="/shopping-topic" element={<Shopping />} />
      <Route path="/sport-topic" element={<Sport />} />
      <Route path="/programming-topic" element={<Programming />} />
      <Route path="/nature-topic" element={<Nature />} />
      <Route path="/work-topic" element={<Work />} />
      <Route path="/popular" element={<PopularWords />} />
      <Route path="/grammar" element={<GrammarDictionary />} />

      <Route path="/online-tests" element={<OnlineTestsListPage />} />
      <Route path="/level-tests" element={<ByLevelTestPage />} />
      <Route path="/mixed-tests" element={<ByTopicTestsPage />} />
      <Route path="/topics-tests" element={<ByTimeTestsPage />} />
      <Route path="/test/level/:level" element={<DynamicTest />} />
      <Route path="/test/topic/:topic" element={<DynamicTopicTest />} />
      <Route path="/test/time/:time" element={<DynamicTimeTest />} />
      <Route path="/test/online/:id" element={<DynamicOnlineTest />} />
      <Route path="/:level" element={<DynamicTest />} />
    </Routes>
  );
}

export default AppRouter;
