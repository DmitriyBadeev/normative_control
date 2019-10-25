using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.CheckDocuments.Interfaces
{
    public interface IDocument
    {
        Dictionary<string, List<string>> Attributes { get; set; }
        void SetAttributes();
        List<Error> GetErrors();
    }
}
