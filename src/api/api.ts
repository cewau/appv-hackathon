import {Student} from "@/types/user";
import {Module} from "@/types/module";
import {Grade} from "@/types/grade";

export async function login(username: string, password: string): Promise<boolean> {
  return (await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"username": username, "password": password})
  })).ok;
}

export async function logout(): Promise<void> {
  await fetch("/auth/logout", {method: "POST"});
}

export async function getStudentData(): Promise<Student[]> {
  return await (await fetch("/api/student")).json();
}

export async function getModuleData(): Promise<Module[]> {
  return await (await fetch("/api/modules")).json();
}

export async function getGradeData(): Promise<Grade[]> {
  return await (await fetch("/api/grades")).json();
}

export function formatGrades(grades: Grade[], modules: Module[]): Grade[] {
  grades.forEach(grade => {
    let code = "";
    const moduleID = grade.moduleID;
    for (const m of modules) {
      if (m._id === moduleID) {
        code = m.code;
        break;
      }
    }
    grade.moduleCode = code;
  });
  return grades;
}

