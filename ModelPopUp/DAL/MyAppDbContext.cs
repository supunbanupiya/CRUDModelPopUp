using Microsoft.EntityFrameworkCore;
using ModelPopUp.Models.DBEntities;

namespace ModelPopUp.DAL
{
    public class MyAppDbContext : DbContext
    {
        public MyAppDbContext(DbContextOptions options) : base(options)
        {
        }
        public virtual DbSet<Product> Products { get; set; }
    }

}
