using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib
{
    public class Calculator
    {
        public int Calculate(int first, int second, string operation)
        {
            switch (operation)
            {
                case "+":
                    return Add(first, second);
                case "-":
                    return Subtract(first, second);
                case "*":
                    return Multiply(first, second);
                default:
                    throw new ArgumentException($"{operation} is not a valid operation", "operation");
            }
        }

        private int Multiply(int first, int second)
        {
            return first * second;
        }

        private int Subtract(int first, int second)
        {
            return first - second;
        }

        private int Add(int first, int second)
        {
            return first + second;
        }
    }
}
