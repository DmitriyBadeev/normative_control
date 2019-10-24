using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.Models
{
    public class Work
    {
        public int Id { get; set; }

        public string NameFile { get; set; }

        public string Template { get; set; }

        public string Path { get; set; }

        public string Status { get; set; }

        public int StudentId { get; set; }

        public User Student { get; set; }

        public IEnumerable<Error> Errors { get; set; }
    }
}
