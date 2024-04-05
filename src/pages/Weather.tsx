import WeaterCard from "@/components/ui/WeaterCard";
import WeaterSkeleton from "@/components/ui/WeaterSkeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CITY_LIST } from "@/constant";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("New York");
  const { fetcher, isLoading, data } = useFetch();
  useEffect(() => {
    fetcher(`/weather?city=${city}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <main className="w-full text-white min-h-screen py-10 space-y-10">
      <section className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">{city}</h1>
        <Select onValueChange={(value) => setCity(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="New York" />
          </SelectTrigger>
          <SelectContent>
            {CITY_LIST.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
      <section className="container mx-auto grid grid-cols-4 gap-5">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <WeaterSkeleton key={index} />
          ))
        ) : (
          <>
            <WeaterCard
              value={data?.cloud_pct}
              title="Cloud Percentage"
              unit="%"
            />
            <WeaterCard value={data?.temp} title="Temperature" unit="°C" />
            <WeaterCard value={data?.feels_like} title="Feels Like" unit="°C" />
            <WeaterCard value={data?.humidity} title="Humidity" unit="°C" />
            <WeaterCard
              value={data?.max_temp}
              title="Max Temperature"
              unit="°C"
            />
            <WeaterCard
              value={data?.min_temp}
              title="Min Temperature"
              unit="°C"
            />
            <WeaterCard
              value={data?.wind_speed}
              title="Wind Speed"
              unit="m/s"
            />
            <WeaterCard
              value={data?.wind_degrees}
              title="Wind Degrees"
              unit="°"
            />
            <WeaterCard value={data?.sunrise} title="Sunrise" unit="time" />
            <WeaterCard value={data?.sunset} title="Sunset" unit="time" />
          </>
        )}
      </section>
    </main>
  );
}
