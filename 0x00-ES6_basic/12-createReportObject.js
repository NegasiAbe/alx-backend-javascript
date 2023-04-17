export default function createReportObject() {
    const allEmployees = {
      engineering: ['John Doe', 'Guillaume Salva'],
    };
  
    return {
      allEmployees,
      getNumberOfDepartments() {
        return Object.keys(allEmployees).length;
      },
    };
  }
  