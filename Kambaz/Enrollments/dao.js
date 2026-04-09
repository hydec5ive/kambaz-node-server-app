import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao() {
  const findAllEnrollments = () => model.find();
  const findEnrollmentsForUser = (userId) => model.find({ user: userId });
  const findCoursesForUser = async (userId) => {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
  };
  const findUsersForCourse = async (courseId) => {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
  };
  const enrollUserInCourse = async (userId, courseId) => {
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    return await model.create(newEnrollment);
  };
  const unenrollUserFromCourse = (userId, courseId) => model.deleteOne({ user: userId, course: courseId });
  const unenrollAllUsersFromCourse = (courseId) => model.deleteMany({ course: courseId });
  return {
    findAllEnrollments,
    findEnrollmentsForUser,
    findCoursesForUser,
    findUsersForCourse,
    enrollUserInCourse,
    unenrollUserFromCourse,
    unenrollAllUsersFromCourse,
  };
}