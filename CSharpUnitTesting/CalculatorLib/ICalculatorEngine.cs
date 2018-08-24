using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib
{
    public interface ICalculatorEngine
    {
        int Add(int first, int second);
        int Subtract(int first, int second);
        int Multiply(int first, int second);
    }
}
