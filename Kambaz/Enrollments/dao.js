import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao() {
  const findAllEnrollments = () => model.find();
  const findEnrollmentsForUser = (userId) => model.find({ user: userId });
  const enrollUserInCourse = async (userId, courseId) => {
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    return await model.create(newEnrollment);
  };
  const unenrollUserFromCourse = (userId, courseId) => model.deleteOne({ user: userId, course: courseId });
  return {
    findAllEnrollments,
    findEnrollmentsForUser,
    enrollUserInCourse,
    unenrollUserFromCourse,
  };
}