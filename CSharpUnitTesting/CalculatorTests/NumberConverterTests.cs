using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CalculatorLib;

namespace CalculatorTests
{
    [TestClass]
    public class NumberConverterTests
    {
        private NumberConverter converter;

        [TestInitialize]
        public void Init()
        {
            converter = new NumberConverter();
        }

        [TestMethod]
        public void The_Number_0_should_return_zero()
        {
            // 1. Arrange
            var input = 0;
            var expected = "zero";

            // 2. Act
            var actual = converter.ToWords(input);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }
    }
}
