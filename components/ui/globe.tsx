import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

export function World({
  globeConfig,
  data,
  pinsData = [],
}: {
  globeConfig: any;
  data: any[];
  pinsData?: any[];
}) {
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [landPolygons, setLandPolygons] = useState<any[]>([]);

  // Create a real ThreeJS material with the requested globe color.
  // This is the ONLY reliable way to set a solid globe surface color in react-globe.gl.
  const globeMaterial = useMemo(() => {
    const color = globeConfig.globeColor || "#000b43";
    const mat = new THREE.MeshPhongMaterial();
    mat.color = new THREE.Color(color);
    mat.emissive = new THREE.Color(color);
    mat.emissiveIntensity = 0.1;
    mat.shininess = 0.9;
    return mat;
  }, [globeConfig.globeColor]);

  useEffect(() => {
    // Fetch GeoJSON map data to create the "dotted/hex" github globe material effect
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson",
    )
      .then((res) => res.json())
      .then((geojson) => {
        setLandPolygons(geojson.features);
      })
      .catch((err) =>
        console.error("Could not fetch geographic boundaries", err),
      );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleResize();
      if (globeRef.current) {
        if (globeConfig.initialPosition) {
          globeRef.current.pointOfView(
            {
              lat: globeConfig.initialPosition.lat,
              lng: globeConfig.initialPosition.lng,
              altitude: 2,
            },
            1000,
          );
        }
        const controls = globeRef.current.controls();
        if (controls) {
          controls.autoRotate = globeConfig.autoRotate || false;
          controls.autoRotateSpeed = globeConfig.autoRotateSpeed || 0.5;
          controls.enableZoom = false;
        }
      }
    }, 300);

    return () => window.removeEventListener("resize", handleResize);
  }, [globeConfig]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center overflow-hidden"
    >
      {dimensions.width > 0 && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          showGlobe={true}
          globeMaterial={globeMaterial}
          backgroundColor="rgba(0,0,0,0)"
          // Render the landmasses as a hex grid
          hexPolygonsData={landPolygons}
          hexPolygonResolution={3}
          hexPolygonMargin={0.7}
          hexPolygonColor={(d: any) => {
            if (d.properties.ISO_A2 === "NG") {
              return "#d4af37"; // Solid Gold for Nigeria
            }
            return globeConfig.polygonColor || "rgba(255, 255, 255, 0.7)";
          }}
          arcsData={data}
          arcStartLat={(d: any) => d.startLat}
          arcStartLng={(d: any) => d.startLng}
          arcEndLat={(d: any) => d.endLat}
          arcEndLng={(d: any) => d.endLng}
          arcColor={(d: any) => d.color}
          arcAltitude={(d: any) => d.arcAlt}
          arcDashLength={globeConfig.arcLength || 0.9}
          arcDashGap={2}
          arcDashInitialGap={() => Math.random()}
          arcDashAnimateTime={globeConfig.arcTime || 1000}
          arcsTransitionDuration={0}
          atmosphereColor={globeConfig.atmosphereColor || "#FFFFFF"}
          atmosphereAltitude={globeConfig.atmosphereAltitude || 0.1}
          // HTML Pins for Offices
          htmlElementsData={pinsData}
          htmlAltitude={0.01}
          htmlElement={(d: any) => {
            const el = document.createElement("div");
            el.innerHTML = `
              <div class="group" style="display: flex; flex-direction: column; align-items: center; pointer-events: auto; transform: translate(-50%, -10px); cursor: pointer;">
                <div style="background-color: #d4af37; border: 2px solid white; width: 14px; height: 14px; border-radius: 50%; box-shadow: 0 0 20px rgba(212, 175, 55, 1); animation: pulse 2s infinite;"></div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style="position: absolute; top: 100%; background-color: rgba(6, 32, 86, 0.85); border: 1px solid rgba(212, 175, 55, 0.6); color: white; padding: 6px 10px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-top: 8px; white-space: nowrap; backdrop-filter: blur(4px); box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                  ${d.label.replace(/\n/g, "<br/>")}
                </div>
              </div>
            `;
            return el;
          }}
        />
      )}
    </div>
  );
}
