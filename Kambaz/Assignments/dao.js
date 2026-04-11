import model from "./model.js";
import { v4 as uuids4 } from "uuid";
export default function AssignmentsDao() {
  const findAssignmentsForCourse = (courseId) => model.find({ course: courseId });
  const findAssignmentById = (assignmentId) => model.findById(assignmentId);
  const createAssignment = async (assignment) => {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return await model.create(newAssignment);
  };
  const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });
  const updateAssignment = (assignmentId, assignmentUpdates) => model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
  return {
    findAssignmentsForCourse,
    findAssignmentById,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
}