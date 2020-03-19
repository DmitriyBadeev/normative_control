using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public interface ITextElement
    {
        DocumentFormat.OpenXml.OpenXmlElement XmlData { get; }
        List<Error> ErrorList { get; }
        Dictionary<string, List<string>> Attributes { get; }
    }
}
