function highestPaid(employees) {
    let highestSalaryEmployee = employees[0];
    for (let { salary, ...employee } of employees) {
      if (salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = { salary, ...employee };
      }
    }
  
    const { name, age, department, salary } = highestSalaryEmployee;
    return { name, age, department, salary };
  }
  
  function destructuring_wap(employees) {
    if (employees.length > 1) {
      [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
    }
    
    return employees;
  }
  
  const employees = [
    { name: "John", age: 28, department: "IT", salary: 50000 },
    { name: "Alice", age: 32, department: "HR", salary: 70000 },
    { name: "Bob", age: 25, department: "Finance", salary: 60000 },
  ];
  
  // Function call to find the highest-paid employee
  const highest = highestPaid(employees);
  console.log("Highest Paid Employee:", highest);
  
  // Function call to swap first and last employees
  const swappedEmployees = destructuring_swap(employees);
  console.log("Employees after swap:", swappedEmployees);
  