using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.CheckDocuments
{
    public class Error
    {
        public string Parameter;
        public string Value;
        public string ExpectValue;

        public Error(string param, string value, string expect)
        {
            Parameter = param;
            Value = value;
            ExpectValue = expect;
        }
    }
}
