import { Router } from "express";
import { getStudents, getStudent, createStudent, updateStudent, deleteStudent } from "../controllers/students.controller.ts";

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;