using System;

namespace MyFirstProgram
{
    class Program
    {
        static void Main(string[] args)
        {
            // class = A bundle of related code

            Messages.Hello();
            Messages.Waiting();
            Messages.Bye();

            Console.ReadKey();
        }
    }
    static class Messages
    {
        public static void Hello()
        {
            Console.WriteLine("Hello! Welcome to the program");
        }
        public static void Waiting()
        {
            Console.WriteLine("I am waiting for something");
        }
        public static void Bye()
        {
            Console.WriteLine("Bye! Thanks for visiting");
        }
    }
}