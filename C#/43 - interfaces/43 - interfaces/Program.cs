using System;

namespace MyFirstProgram
{
    class Program
    {
        static void Main(string[] args)
        {
            // interface = defines a "contract" that all the classes inheriting from should follow

            //             An interface declares "what a class should have"
            //             An inheriting class defines "how it should do it"
            //             Benefit = security + multiple inheritance + "plug-and-play"

            Rabbit rabbit = new Rabbit();
            Hawk hawk = new Hawk();
            Fish fish = new Fish();

            rabbit.Flee();
            hawk.Hunt();
            fish.Flee();
            fish.Hunt();

            Console.ReadKey();
        }
        interface IPrey    // IPrey => short for "Interface Pray"
        {
            void Flee();  // prey should flee
        }
        interface IPredator
        {
            void Hunt();  // predator should hunt
        }
        class Rabbit : IPrey 
        {
            public void Flee()  
            {
                Console.WriteLine("The rabbit runs away!");  // "how" the prey should flee
            }
        }
        class Hawk : IPredator
        {
            public void Hunt()
            {
                Console.WriteLine("The hawk is searching for food!");  // "how" the predator should hunt
            }
        }
        class Fish : IPrey, IPredator  // has both interfaces, so should have both the flee and hunt method
        {
            public void Flee()
            {
                Console.WriteLine("The fish swims away!");
            }
            public void Hunt()
            {
                Console.WriteLine("The fish is searching for smaller fish!");
            }
        }
    }
}

