import { Outlet } from "react-router-dom";

function StudentViewCommonLayout() {
  // const location = useLocation();
  return (
    <div>
      {/* {!location.pathname.includes("course-progress") ? (
        <StudentViewCommonHeader />
      ) : null} */}
      Common content
      <Outlet />
    </div>
  );
}

export default StudentViewCommonLayout;
