using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;

namespace BL.Test
{
    [TestFixture]
    public class TestParagraph
    {
        private ITemplate _template;
        private string _path;

        private readonly string[] _nameOfParameters = new[]
        {
            "Размер", "Шрифт"
        };

        [SetUp]
        public void Setup()
        {
            var courseWorkTemplate = new CourseWork();
            _template = courseWorkTemplate;
            _path = Environment.CurrentDirectory + @"\TestDocuments\ParagraphDocs\";
        }

        [Test]
        public void AllWrong()
        {
            var fileName = "FontDocsWrong.docx";
            var actualFieldErrors = GetActualErrors(fileName);

            var exceptFieldErrors = new List<Error>
            {
                new Error(_nameOfParameters[0], "12", "14"),
                new Error(_nameOfParameters[0], "16", "14"),
                new Error(_nameOfParameters[1], "Calibri", "Times New Roman"),
            };

            if (exceptFieldErrors.Count != actualFieldErrors.Count)
                Assert.Fail("Count of the except errors isn't an equal count of actual errors");

            foreach (var error in actualFieldErrors)
            {
                if (error.Parameter == _nameOfParameters[0])
                    Assert.AreEqual("14", error.ExpectValue);

                if (error.Parameter == _nameOfParameters[1])
                    Assert.AreEqual("Times New Roman", error.ExpectValue);

                if (_nameOfParameters[0] == error.Parameter && (error.Value != "12" && error.Value != "16"))
                    Assert.Fail("There is a wrong value");


                if (_nameOfParameters[1] == error.Parameter && error.Value != "Calibri")
                    Assert.Fail("There is a wrong value");
            }
        }

        [Test]
        public void AllOk()
        {
            var fileName = "FontDocsRight.docx";
            var actualFieldErrors = GetActualErrors(fileName);

            var exceptFieldErrors = new List<Error>();

            if (exceptFieldErrors.Count != actualFieldErrors.Count)
                Assert.Fail("There is an error when it hasn't errors ");
        }

        private List<Error> GetActualErrors(string fileName)
        {
            var document = new Document(_path + fileName, _template);
            var errorList = document.GetErrors();

            var actualFieldErrors = new List<Error>();

            foreach (var el in errorList)
            foreach (var error in el.Value)
            {
                if (_nameOfParameters.Contains(error.Parameter))
                    actualFieldErrors.Add(error);
            }

            return actualFieldErrors;
        }
    }
}