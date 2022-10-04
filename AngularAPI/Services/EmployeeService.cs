using AngularAPI.Models;
using AngularAPI.Data;

namespace AngularAPI.Services
{
    public class EmployeeService : IEmployeeService
    {
        private EmployeeDbContext _context;
        public EmployeeService(EmployeeDbContext context){
            _context = context;
        }

        public Employee AddEmployee(AddEmployeeRequest employee)
        {
             Employee emp = new Employee(){
                Id =  Guid.NewGuid(),
                Name = employee.Name,
                Email = employee.Email,
                Phone = employee.Phone,
                Salary = employee.Salary,
                Department = employee.Department
             };
             if(employee == null) return null;
             _context.Add(emp);
             _context.SaveChanges();
             return emp;
        }

        public Employee GetEmployeeById(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Employee> GetEmployees()
        {
            var result =  _context.Employees.ToList();
            return result;
        }

        public Employee UpdateEmployee(Guid id, Employee employee)
        {
            throw new NotImplementedException();
        }
    }
}