using AngularAPI.Models;

namespace AngularAPI.Services
{
    public interface IEmployeeService
    {
         IEnumerable<Employee> GetEmployees();
         Employee GetEmployeeById(Guid id);
         Employee AddEmployee(AddEmployeeRequest employee);
         Employee DeleteEmployee(Guid id);
         int UpdateEmployee(Guid id,UpdateEmployeeRequest employee);
    }
}