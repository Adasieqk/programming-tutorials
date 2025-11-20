using System;

namespace MyFirstProgram
{
    class Program
    {
        static void Main(string[] args)
        {
            // method  = performs a section of code, benefit = Let's us reuse code w/o writing it multiple 

            String name = "madafaka";
            int age = 67;

            SingHappyBirthday(name, age);

            Console.ReadKey();
        }
        static void SingHappyBirthday(String birthdayBoy, int yearsOld)
        {
            Console.WriteLine("Happy birthday to you!");
            Console.WriteLine("Happy birthday to you!");
            Console.WriteLine("Happy birthday dear " + birthdayBoy);
            Console.WriteLine("You are " + yearsOld + " years old!");
            Console.WriteLine("Happy birthday to you!");
            Console.WriteLine();
        }
    }
}