using System;

namespace MyFirstProgram
{
    class Program
    {
        static void Main(string[] args)
        {
            //params keyword = a method parameter that takes a variable number of arguments.
            //                 The parameter type must be a single - dimensional array

            double total = CheckOut(67, 69, 420, 2137);

            Console.WriteLine(total);
            Console.ReadKey();
        }

        static double CheckOut(params double[] prices)   // prices = array
        {
            double total = 0;

            foreach (double price in prices)
            {
                total += price;
            }
            return total;
        }
    }
}

