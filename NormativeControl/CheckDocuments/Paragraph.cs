using NormativeControl.CheckDocuments.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.CheckDocuments
{
    public class Paragraph : IDocument
    {
        public DocumentFormat.OpenXml.OpenXmlElement XmlData { get; }
        public List<Error> ErrorList;
        private List<Fragment> fragments;
        private ITemplate template;
        public Dictionary<string, List<string>> Attributes { get; set; }

        public Paragraph(DocumentFormat.OpenXml.OpenXmlElement data, ITemplate temp)
        {
            XmlData = data;
            template = temp;
            SetAttributes();
        }

        public List<Error> GetErrors()
        {
            ErrorList = new List<Error>();
            fragments = new List<Fragment>();

            foreach (var child in XmlData.ChildElements)
                fragments.Add(new Fragment(child, template));

            foreach (var fragment in fragments)
                try
                {
                    foreach (var el in fragment.GetErrors())
                        ErrorList.Union(fragment.GetErrors());
                }
                catch { continue; }

            return ErrorList;
        }

        public void SetAttributes()
        {
            Attributes = new Dictionary<string, List<string>>(); // Все аттрибуты абзаца

            for (int i = 0; i < XmlData.ChildElements.Count; i++)
            {
                var childAttr = new List<string>(); // Аттрибуты отдельного ребёнка

                foreach (var attribute in XmlData.ChildElements[i].GetAttributes())
                    childAttr.Add(attribute.Value);

                if (!Attributes.ContainsKey(XmlData.ChildElements[i].LocalName))
                    Attributes.Add(XmlData.ChildElements[i].LocalName, childAttr);
            }
        }
    }
}
