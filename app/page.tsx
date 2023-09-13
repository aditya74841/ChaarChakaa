import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt=12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl  font-extrabold"> Car Catalouge</h1>
          <p>Explore the cars you might like</p>
        </div>
 
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car)=>(
                <CarCard car={car}/>
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-x1 font-bold">Oops, no results </h2>
          </div>
        )}
      </div>
    </main>
  );
}

// git remote add origin https://github.com/aditya74841/ChaarChakaa.git
// git branch -M main
// git push -u origin main
