using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NormativeControl.Models
{
    public class Context : DbContext
    {
        public DbSet<User> Users { get; set; }

        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }
    }
}
