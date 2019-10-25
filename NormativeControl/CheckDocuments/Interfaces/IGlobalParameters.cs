using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.CheckDocuments.Interfaces
{
    public interface IGlobalParameters
    {
        string MarginTop { get; }
        string MarginBottom { get; }
        string MarginLeft { get; }
        string MarginRight { get; }
    }
}
