using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib
{
    public class NumberConverter
    {
        private static string[] units = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
        private static string[] teens = { "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
        private static string[] decades = { "", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};

        public string ToWords(int input)
        {
            if (input < 10)
            {
                return units[input];
            }
            if (input < 20)
            {
                return teens[input - 10];
            }
            var decade = input / 10;
            var unit = input % 10;
            return $"{decades[decade]} {units[unit]}";
        }

    }
}
