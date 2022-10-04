using AngularAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularAPI.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions options) : base(options){

        }

        public DbSet<Employee> Employees { get; set; }
    }
}