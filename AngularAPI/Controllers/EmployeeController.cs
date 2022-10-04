using AngularAPI.Models;
using AngularAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace AngularAPI.Controllers
{
    [Route("[controller]")]
    public class EmployeeController : ControllerBase    
    {
        private IEmployeeService _service;
        public EmployeeController(IEmployeeService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(_service.GetEmployees());
        }
        [HttpPost]
        public ActionResult Add(AddEmployeeRequest request){
            var result = _service.AddEmployee(request);
            if(result == null) return BadRequest();
            return Ok(result);
        }
    }
}