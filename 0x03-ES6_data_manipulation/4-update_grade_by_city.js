export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.map(student => {
      if (student.city === city) {
        const newGrade = newGrades.find((grade) => grade.id === student.id);
        if (newGrade) {
          return { ...student, grade: newGrade.grade };
        }
      }
      return student;
    });
  }
  