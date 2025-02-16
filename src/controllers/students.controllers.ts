import {  Request, Response } from 'express';

// Sample in-memory database (Replace with real DB later)
let students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 22 },
  ];

  export const getStudents = (req: Request, res: Response) => {
    res.json({ message: "List of all students", students });
  };

  export const getStudent = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const student = students.find((student) => student.id === id);
    res.json({ message: "Student found", student });
  }

  export const createStudent = (req: Request, res: Response) => {
    const { name, age } = req.body;
    const id = students.length + 1;
    students.push({ id, name, age });
    res.json({ message: "New student created", student: { id, name, age } });
  }


  export const updateStudent = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;
    const student = students.find((student) => student.id === id);
    // ✅ Check if student exists before updating
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    if (name) student.name = name;
    if (age) student.age = age;
    res.json({ message: "Student updated", student });
  };
  

  export const deleteStudent = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    students = students.filter((student) => student.id !== id);
    res.json({ message: "Student deleted", students });
  }
  