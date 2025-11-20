using System;

namespace RandomNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();  // object

            int num1 = random.Next(1, 7);  // next generates a random whole int
            int num2 = random.Next(1, 7);
            int num3 = random.Next(1, 7);

            //double num = random.NextDouble(); // random decimal number (from 0 to 1)

            Console.WriteLine(num1);
            Console.WriteLine(num2);
            Console.WriteLine(num3);

            Console.ReadKey();
        }
    }
}