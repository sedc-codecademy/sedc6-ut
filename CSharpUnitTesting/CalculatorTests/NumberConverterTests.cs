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

        [TestMethod]
        public void The_Number_6_should_return_six()
        {
            // 1. Arrange
            var input = 6;
            var expected = "six";

            // 2. Act
            var actual = converter.ToWords(input);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void The_Number_10_should_return_ten()
        {
            // 1. Arrange
            var input = 10;
            var expected = "ten";

            // 2. Act
            var actual = converter.ToWords(input);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void The_Number_12_should_return_twelve()
        {
            // 1. Arrange
            var input = 12;
            var expected = "twelve";

            // 2. Act
            var actual = converter.ToWords(input);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void The_Number_72_should_return_seventy_two()
        {
            // 1. Arrange
            var input = 72;
            var expected = "seventy two";

            // 2. Act
            var actual = converter.ToWords(input);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }
    }
}
