using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.CheckDocuments.Interfaces
{
    public interface ITemplate
    {
        GlobalParameters GlobalParameters { get; }
        LocalParameters LocalParameters { get; }
    }
}
