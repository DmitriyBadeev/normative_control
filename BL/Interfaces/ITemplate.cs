using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public interface ITemplate
    {
        GlobalParameters GlobalParameters { get; }
        ParagraphParameters ParagraphParameters { get; }
    }
}
