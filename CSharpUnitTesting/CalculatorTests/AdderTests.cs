using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CalculatorLib;

namespace CalculatorTests
{
    [TestClass]
    public class AdderTests
    {
        private Calculator calculator;

        [TestInitialize]
        public void ConstructCalculator()
        {
            calculator = new Calculator();
        }

        [TestMethod]
        public void Adding_number_with_zero_results_in_the_same_number()
        {
            // 1. Arrange
            var first = 10;
            var second = 0;
            var expected = first;
            // 2. Act
            var actual = calculator.Add(first, second);
            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Adding_number_with_opposite_number_results_in_zero()
        {
            // 1. Arrange
            var first = 10;
            var second = -10;
            var expected = 0;
            // 2. Act
            var actual = calculator.Add(first, second);
            // 3. Assert
            Assert.AreEqual(expected, actual);
        }
    }
}
