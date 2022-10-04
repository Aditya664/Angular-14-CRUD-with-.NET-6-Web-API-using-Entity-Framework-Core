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
        public ActionResult Add([FromBody]AddEmployeeRequest request){
            var result = _service.AddEmployee(request);
            if(result == null) return BadRequest();
            return Ok(result);
        }
        [HttpGet("{id}")]
        public ActionResult Get(Guid id){
            var result = _service.GetEmployeeById(id);
            if(result == null) return NotFound();
            return Ok(result);
        }
        [HttpDelete("{id}")]
        public ActionResult Delete(Guid id){
            var result = _service.DeleteEmployee(id);
            if(result == null) return NotFound();
            return NoContent();
        }
        [HttpPut("{id}")]
        public ActionResult Update(Guid id,UpdateEmployeeRequest request){
            var result = _service.UpdateEmployee(id,request);
            if(result == -1) return BadRequest();
            if(result == 0) return NotFound();
            return NoContent();
        }
    }
}