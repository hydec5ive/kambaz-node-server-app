import EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);
  const findAllEnrollments = (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  };
  const findEnrollmentsForUser = (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  };
  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = dao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  };
  const unenrollUserFromCourse = (req, res) => {
    const { userId, courseId } = req.params;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(200);
  };
  app.get("/api/enrollments", findAllEnrollments);
  app.get("/api/users/:userId/enrollments", findEnrollmentsForUser);
  app.post("/api/users/:userId/courses/:courseId/enrollments", enrollUserInCourse);
  app.delete("/api/users/:userId/courses/:courseId/enrollments", unenrollUserFromCourse);
}