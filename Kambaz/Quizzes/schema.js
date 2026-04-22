import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  _id: String,
  text: String,
  isCorrect: { type: Boolean, default: false },
});

const questionSchema = new mongoose.Schema({
  _id: String,
  title: String,
  type: { type: String, enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_BLANK"], default: "MULTIPLE_CHOICE" },
  points: { type: Number, default: 1 },
  question: String,
  answers: [answerSchema],
  correctAnswer: String,
});

const quizSchema = new mongoose.Schema({
  _id: String,
  title: { type: String, default: "Unnamed Quiz" },
  course: { type: String, ref: "CourseModel", required: true },
  description: String,
  quizType: { type: String, enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"], default: "Graded Quiz" },
  points: { type: Number, default: 0 },
  assignmentGroup: { type: String, enum: ["Quizzes", "Exams", "Assignments", "Project"], default: "Quizzes" },
  shuffleAnswers: { type: Boolean, default: true },
  hasTimeLimit: { type: Boolean, default: true },
  timeLimit: { type: Number, default: 20 },
  multipleAttempts: { type: Boolean, default: false },
  howManyAttempts: { type: Number, default: 1 },
  showCorrectAnswers: { type: String, default: "" },
  accessCode: { type: String, default: "" },
  oneQuestionAtATime: { type: Boolean, default: true },
  webcamRequired: { type: Boolean, default: false },
  lockQuestionsAfterAnswering: { type: Boolean, default: false },
  dueDate: String,
  availableDate: String,
  untilDate: String,
  published: { type: Boolean, default: false },
  questions: [questionSchema],
}, { collection: "quizzes" });

export default quizSchema;