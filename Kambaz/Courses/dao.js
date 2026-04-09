import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function CoursesDao() {
  const findAllCourses = () => model.find({}, { name: 1, description: 1, image: 1, number: 1 });
  const findCourseById = (courseId) => model.findById(courseId);
  const createCourse = async (course) => {
    const newCourse = { 
      ...course, 
      _id: uuidv4(),
      image: course.image || "/images/reactjs.jpg",
      modules: []
    };
    return await model.create(newCourse);
  };
  const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
  const updateCourse = (courseId, courseUpdates) => model.updateOne({ _id: courseId }, { $set: courseUpdates });
  return {
    findAllCourses,
    findCourseById,
    createCourse,
    deleteCourse,
    updateCourse,
  };
}