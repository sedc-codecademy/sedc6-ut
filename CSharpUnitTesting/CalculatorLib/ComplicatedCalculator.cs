using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib
{
    public class ComplicatedCalculator
    {
        public DbCalculatorEngine CalculatorEngine { get; set; }

        public ComplicatedCalculator()
        {
            CalculatorEngine = new DbCalculatorEngine();
        }

        public int Calculate(int first, int second, string operation)
        {
            switch (operation)
            {
                case "+":
                    return CalculatorEngine.Add(first, second);
                case "-":
                    return CalculatorEngine.Subtract(first, second);
                case "*":
                    return CalculatorEngine.Multiply(first, second);
                default:
                    throw new ArgumentException($"{operation} is not a valid operation", "operation");
            }
        }
    }
}
