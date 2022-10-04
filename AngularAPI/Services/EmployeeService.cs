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

        public Employee DeleteEmployee(Guid id)
        {
            var found = _context.Employees.Find(id);
            if(found == null) return null;
            _context.Employees.Remove(found);
            _context.SaveChanges();
            return found;
        }

        public Employee GetEmployeeById(Guid id)
        {
            var found = _context.Employees.Find(id);
            if (found == null) return null;
            return found;
        }

        public IEnumerable<Employee> GetEmployees()
        {
            var result =  _context.Employees.ToList();
            return result;
        }

        public int UpdateEmployee(Guid id, UpdateEmployeeRequest employee)
        {
            if(employee == null || id == null) return -1;
            var found = _context.Employees.Find(id);
            if(found == null) return 0;
            found.Name = employee.Name;
            found.Email = employee.Email;
            found.Phone = employee.Phone;
            found.Salary = employee.Salary;
            found.Department = employee.Department;
            _context.SaveChanges();
            return 1;
        }
    }
}