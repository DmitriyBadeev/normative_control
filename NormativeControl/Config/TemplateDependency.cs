using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NormativeControl.CheckDocuments;
using NormativeControl.CheckDocuments.Interfaces;

namespace NormativeControl.Config
{
    public class TemplateDependency
    {
        private static Dictionary<int, ITemplate> dependencyTemplates = new Dictionary<int, ITemplate>
        {
            { 1, new CourseWork() }
        };

        public static ITemplate GetTemplate(int idTemplate)
        {
            if (dependencyTemplates.ContainsKey(idTemplate))
                return dependencyTemplates[idTemplate];

            return null;
        }
    }
}
