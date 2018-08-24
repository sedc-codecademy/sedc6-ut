using Microsoft.VisualStudio.TestTools.UnitTesting;
using CalculatorLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib.Tests
{
    [TestClass()]
    public class ComplicatedCalculatorTests
    {
        private ComplicatedCalculator calculator;

        [TestInitialize]
        public void Init()
        {
            calculator = new ComplicatedCalculator();
        }

        [TestMethod]
        public void Adding_two_numbers_should_add_two_numbers()
        {
            // 1. Arrange
            var first = 1;
            var second = 2;
            var operation = "+";
            var expected = 3;

            // 2. Act
            var actual = calculator.Calculate(first, second, operation);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Subtracting_two_numbers_should_subtract_two_numbers()
        {
            // 1. Arrange
            var first = 20;
            var second = 3;
            var operation = "-";
            var expected = 17;

            // 2. Act
            var actual = calculator.Calculate(first, second, operation);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }
    }
}