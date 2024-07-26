import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";


const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      if(props.isDark){
        options.particles.color= "#ecedf3";
        options.particles.links.color="#ecedf3"
      } else {
        options.particles.color= "#14161f";
        options.particles.links.color="#14161f"
      }
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [props.isDark]);

  const particlesLoaded = (container) => {
    console.log(container)
  };


  let options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        links: {
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 125,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }),
    [],
  );


  return <Particles className="-z-10 absolute opacity-30" init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;