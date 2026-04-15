import mongoose from "mongoose";

const answerRecordSchema = new mongoose.Schema({
  questionId: String,
  answer: String, // Student's answer
  isCorrect: Boolean,
  points: Number,
});

const quizAttemptSchema = new mongoose.Schema({
  _id: String,
  quiz: { type: String, ref: "QuizModel", required: true },
  user: { type: String, ref: "UserModel", required: true },
  answers: [answerRecordSchema],
  score: { type: Number, default: 0 },
  attemptNumber: { type: Number, default: 1 },
  submittedAt: { type: Date, default: Date.now },
}, { collection: "quizAttempts" });

export default quizAttemptSchema;