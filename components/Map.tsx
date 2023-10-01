"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

type SimpleMapProps = {
  latitude: number;
  longitude: number;
};

export const Map: React.FC<SimpleMapProps> = ({ latitude, longitude }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 14,
      interactive: false,
    });
    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return (
    <div ref={mapContainerRef} className="w-full h-full rounded-2xl"></div>
  );
};
