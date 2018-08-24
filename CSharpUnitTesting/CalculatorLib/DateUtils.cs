using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib
{
    public static class DateUtils
    {
        public static bool IsInFuture(DateTime date)
        {
            return date > DateTime.Now;
        }

        public static bool IsInFuture2(DateTime date, DateTime currentDate)
        {
            return date > currentDate;
        }

    }
}
