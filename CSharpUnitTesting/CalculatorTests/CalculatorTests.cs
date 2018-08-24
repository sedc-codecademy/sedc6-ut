using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CalculatorLib;

namespace CalculatorTests
{
    [TestClass]
    public class CalculatorTests
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
            var actual = calculator.Calculate(first, second, "+");
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
            var actual = calculator.Calculate(first, second, "+");
            // 3. Assert
            Assert.AreEqual(expected, actual);
        }


        [TestMethod]
        public void Subtracting_number_with_zero_results_in_the_same_number()
        {
            // 1. Arrange
            var first = 10;
            var second = 0;
            var expected = first;
            // 2. Act
            var actual = calculator.Calculate(first, second, "-");
            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Subtracting_number_with_same_number_results_in_zero()
        {
            // 1. Arrange
            var first = 10;
            var second = 10;
            var expected = 0;
            // 2. Act
            var actual = calculator.Calculate(first, second, "-");
            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Using_invalid_operation_throws_exception()
        {
            // 1. Arrange
            var first = 10;
            var second = 10;

            // 3. Assert
            Assert.ThrowsException<ArgumentException>(() => calculator.Calculate(first, second, "."));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void Using_invalid_operation_throws_exception_2()
        {
            // 1. Arrange
            var first = 10;
            var second = 10;


            // 2. Act
            calculator.Calculate(first, second, ".");
        }

    }
}
