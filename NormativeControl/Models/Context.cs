using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NormativeControl.Models;

namespace NormativeControl.Models
{
    public class Context : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Work> Works { get; set; }

        public DbSet<Error> Errors { get; set; }


        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }

       
    }
}
