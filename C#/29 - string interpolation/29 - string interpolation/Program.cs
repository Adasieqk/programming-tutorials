using System;

namespace MyFirstProgram
{
    class Program
    {
        static void Main(string[] args)
        {

            // $"{variable}"

            String firstName = "Bro";
            String lastName = "Code";
            int age = 21;

            Console.WriteLine($"Hello {firstName} {lastName}.");
            Console.WriteLine($"You are {age,-10} years old.");   // ,10  => how many spaces of room after age

            Console.ReadKey();
        }
    }
}