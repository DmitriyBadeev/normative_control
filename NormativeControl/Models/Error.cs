using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.Models
{
    public class Error
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public int NumberElement { get; set; }

        public int WorkId { get; set; }

        public Work Work { get; set; }
    }
}
