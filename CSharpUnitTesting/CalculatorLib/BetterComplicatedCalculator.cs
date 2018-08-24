using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib
{
    public class BetterComplicatedCalculator
    {
        public ICalculatorEngine CalculatorEngine { get; set; }

        public BetterComplicatedCalculator(ICalculatorEngine engine)
        {
            CalculatorEngine = engine;
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
