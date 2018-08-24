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
    public class DateUtilsTests
    {
        [TestMethod()]
        public void IsInFutureTest()
        {
            // 1. Arrange
            var date = DateTime.Now.AddDays(1);
            var expected = true;

            // 2. Act
            var actual = DateUtils.IsInFuture(date);

            // 3. Assert
            Assert.AreEqual(expected, actual);
        }
    }
}