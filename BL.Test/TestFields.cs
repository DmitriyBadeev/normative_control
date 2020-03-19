using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;

namespace BL.Test
{
    [TestFixture]
    public class TestFields
    {
        private ITemplate _template;
        private string _path;

        private readonly string[] _nameOfParameters = new[]
        {
            "Верхнее поле", "Правое поле", "Нижнее поле", "Левое поле"
        };

        [SetUp]
        public void Setup()
        {
            var courseWorkTemplate = new CourseWork();
            _template = courseWorkTemplate;
            _path = Environment.CurrentDirectory + @"\TestDocuments\FieldDocs\";
        }

        [Test]
        public void AllWrong()
        {
            var fileName = "FieldAllWrong.docx";
            var actualFieldErrors = GetActualFieldErrors(fileName);

            var exceptFieldErrors = new List<Error>
            {
                new Error(_nameOfParameters[0], "1.27", "2"),
                new Error(_nameOfParameters[1], "1.27", "1.5"),
                new Error(_nameOfParameters[2], "1.27", "2"),
                new Error(_nameOfParameters[3], "1.27", "3"),
            };

            if (exceptFieldErrors.Count != actualFieldErrors.Count)
                Assert.Fail("Count of the except errors isn't an equal count of actual errors");

            foreach (var error in actualFieldErrors)
            {
                Assert.AreEqual("1.27", error.Value);

                if (_nameOfParameters[0] == error.Parameter)
                    Assert.AreEqual("2", error.ExpectValue);


                if (_nameOfParameters[1] == error.Parameter)
                    Assert.AreEqual("1.5", error.ExpectValue);


                if (_nameOfParameters[2] == error.Parameter)
                    Assert.AreEqual("2", error.ExpectValue);


                if (_nameOfParameters[3] == error.Parameter)
                    Assert.AreEqual("3", error.ExpectValue);
            }
        }

        [Test]
        public void AllOk()
        {
            var fileName = "FieldOk.docx";
            var actualFieldErrors = GetActualFieldErrors(fileName);

            var exceptFieldErrors = new List<Error>();

            Assert.AreEqual(exceptFieldErrors.Count, actualFieldErrors.Count);
        }

        [Test]
        public void LeftWrong()
        {
            var fileName = "FieldLeft.docx";
            var actualFieldErrors = GetActualFieldErrors(fileName);

            var exceptFieldErrors = new List<Error>
            {
                new Error(_nameOfParameters[3], "2.5", "3"),
            };

            if (actualFieldErrors.Count != exceptFieldErrors.Count)
                Assert.Fail("Count of the except errors isn't an equal count of actual errors");

            Assert.AreEqual(exceptFieldErrors[0].Parameter, actualFieldErrors[0].Parameter);
            Assert.AreEqual(exceptFieldErrors[0].ExpectValue, actualFieldErrors[0].ExpectValue);
            Assert.AreEqual(exceptFieldErrors[0].Value, actualFieldErrors[0].Value);
        }

        [Test]
        public void RightWrong()
        {
            var fileName = "FieldRight.docx";
            var actualFieldErrors = GetActualFieldErrors(fileName);

            var exceptFieldErrors = new List<Error>
            {
                new Error(_nameOfParameters[1], "2", "1.5")
            };

            if (actualFieldErrors.Count != exceptFieldErrors.Count)
                Assert.Fail("Count of the except errors isn't an equal count of actual errors");


            Assert.AreEqual(exceptFieldErrors[0].Parameter, actualFieldErrors[0].Parameter);
            Assert.AreEqual(exceptFieldErrors[0].ExpectValue, actualFieldErrors[0].ExpectValue);
            Assert.AreEqual(exceptFieldErrors[0].Value, actualFieldErrors[0].Value);
        }

        [Test]
        public void UpAndDownWrong()
        {
            var fileName = "FieldUpDown.docx";
            var actualFieldErrors = GetActualFieldErrors(fileName);

            var exceptFieldErrors = new List<Error>
            {
                new Error(_nameOfParameters[0], "1.9", "2"),
                new Error(_nameOfParameters[2], "2.1", "2"),
            };

            if (exceptFieldErrors.Count != actualFieldErrors.Count)
                Assert.Fail("Count of the except errors isn't an equal count of actual errors");

            foreach (var error in actualFieldErrors)
            {
                Assert.AreEqual("2", error.ExpectValue);

                if (_nameOfParameters[0] == error.Parameter)
                    Assert.AreEqual("1.9", error.Value);


                if (_nameOfParameters[2] == error.Parameter)
                    Assert.AreEqual("2.1", error.Value);
            }
        }

        private List<Error> GetActualFieldErrors(string fileName)
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