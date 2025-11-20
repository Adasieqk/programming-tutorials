using System;

namespace MyFirstProgram
{
    class Program
    {
        static void Main(string[] args)
        {

            // polymorphism = Greek word that means to "have many forms"
            //                Objects can be identified by more than one type
            //                Ex. A Dog is also: Canine, Animal, Organism

            Car car = new Car();
            Bicycle bicycle = new Bicycle();
            Boat boat = new Boat();
            Helicopter heli = new Helicopter();

            Vehicle[] vehicles = { car, bicycle, boat, heli};

            foreach (Vehicle vehicle in vehicles)  // "start of the race"
            {
                vehicle.Go();
            }

            Console.ReadKey();
        }
    }
    class Vehicle
    {
        public virtual void Go()  // needs to be written because we need to override this method in the child classes
            // this is like a default if not overriden
        {
            Console.WriteLine("This vehicle is moving");
        }
    }
    class Car : Vehicle
    {
        public override void Go()
        {
            Console.WriteLine("The car is moving!");
        }
    }
    class Bicycle : Vehicle
    {
        public override void Go()
        {
            Console.WriteLine("The bicycle is moving!");
        }
    }
    class Boat : Vehicle
    {
        public override void Go()
        {
            Console.WriteLine("The boat is moving!");
        }
    }

    class Helicopter : Vehicle
    {
        // no override Go function so it displays the parents' Go function (the vehicle is moving)
    }
}