import { Routes, Route } from "react-router-dom";
import { StudentRoute, AdminRoute } from "./ProtectedRoutes";

// Public
import Landing from "./pages/public/Landing";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Student
import StudentDashboard from "./pages/student/Dashboard";
import ReportIssue from "./pages/student/ReportIssue";
import MyIssues from "./pages/student/MyIssues";
import IssueDetail from "./pages/student/IssueDetail";
import StudentAnnouncements from "./pages/student/Announcements";
import LostAndFound from "./pages/student/LostAndFound";
import ReportLost from "./pages/student/ReportLost";
import ReportFound from "./pages/student/ReportFound";
import IssuesFeed from "./pages/student/IssuesFeed";
import MyAccount from "./pages/student/MyAccount";

// Admin
import AdminDashboard from "./pages/admin/Dashboard";
import ManageIssues from "./pages/admin/ManageIssues";
import IssueDetailAdmin from "./pages/admin/IssueDetail";
import AdminAnnouncements from "./pages/admin/Announcements";
import Analytics from "./pages/admin/Analytics";
import LostAndFoundAdmin from "./pages/admin/LostAndFoundAdmin";
import AddAnnouncement from "./pages/admin/AddAnnouncement";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= STUDENT ROUTES ================= */}
      <Route
        path="/student/dashboard"
        element={
          <StudentRoute>
            <StudentDashboard />
          </StudentRoute>
        }
      />

      <Route
        path="/student/report"
        element={
          <StudentRoute>
            <ReportIssue />
          </StudentRoute>
        }
      />

      <Route
        path="/student/issues"
        element={
          <StudentRoute>
            <MyIssues />
          </StudentRoute>
        }
      />

      <Route
        path="/student/issues/:id"
        element={
          <StudentRoute>
            <IssueDetail />
          </StudentRoute>
        }
      />

      <Route
        path="/student/issues/feed"
        element={
          <StudentRoute>
            <IssuesFeed />
          </StudentRoute>
        }
      />

      <Route
        path="/student/announcements"
        element={
          <StudentRoute>
            <StudentAnnouncements />
          </StudentRoute>
        }
      />

      <Route
        path="/student/lost-found"
        element={
          <StudentRoute>
            <LostAndFound />
          </StudentRoute>
        }
      />

      <Route
        path="/student/lost-found/report-lost"
        element={
          <StudentRoute>
            <ReportLost />
          </StudentRoute>
        }
      />

      <Route
        path="/student/lost-found/report-found"
        element={
          <StudentRoute>
            <ReportFound />
          </StudentRoute>
        }
      />

      <Route
        path="/student/account"
        element={
          <StudentRoute>
            <MyAccount />
          </StudentRoute>
        }
      />

      {/* ================= ADMIN ROUTES ================= */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/manage-issues"
        element={
          <AdminRoute>
            <ManageIssues />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/manage-issues/:id"
        element={
          <AdminRoute>
            <IssueDetailAdmin />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/announcements"
        element={
          <AdminRoute>
            <AdminAnnouncements />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/announcements/add"
        element={
          <AdminRoute>
            <AddAnnouncement />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <AdminRoute>
            <Analytics />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/lost-found"
        element={
          <AdminRoute>
            <LostAndFoundAdmin />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
