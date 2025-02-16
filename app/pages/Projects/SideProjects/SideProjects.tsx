import React from 'react';
import { HeadingPrimary } from '@/app/components/Headings';
import { sideProjects } from '@/app/data/ProjectsData';
import { FaGithub, FaArrowRight } from 'react-icons/fa6';
import { useScroll, motion, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@nextui-org/react';

// Define the type for a library item
type SideProject = {
  name: string;
  brief: string;
  projectImg: string;
  demo: string;
  repository: string;
};

// Define the props for the Card component
type CardProps = {
  i: number;
  name: string;
  brief: string;
  projectImg: string;
  demo: string;
  repository: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const SideProjects = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Predefined attractive gradient colors
  const gradientPalette = [
    'linear-gradient(120deg, #8840FF, #33198C)', // Indigo to Purple
    'linear-gradient(140deg, #34e7e4, #0be881)', // Emerald to Green
    'linear-gradient(125deg, #3742fa, #5352ed)', // Pink to Purple
    'linear-gradient(135deg, #fffa65,  #fff200)', // Blue to Green
    'linear-gradient(135deg, #c44569, #cf6a87)', // Purple to Crimson
    'linear-gradient(135deg, #7E3CF2, #63177A)', // Indigo to Pink
    'linear-gradient(135deg, #FBBF24, #7E3CF2)', // Yellow to Indigo
    'linear-gradient(135deg, #EF4444, #4621A5)', // Crimson to Purple
  ];

  const getGradient = (i: number) => {
    return gradientPalette[i % gradientPalette.length];
  };

  const Card: React.FC<CardProps> = ({ i, name, brief, projectImg, demo, repository, progress, range, targetScale }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: cardScrollYProgress } = useScroll({
      target: cardRef,
      offset: ['start end', 'start start'],
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
      <div ref={cardRef} className='sticky top-28'>
        <motion.div
          className='relative -top-[26%] bg-container shadow-lg overflow-hidden rounded-2xl mb-12 grid grid-cols-1 md:grid-cols-[1.75fr_2fr] h-[28rem]'
          style={{ background: getGradient(i), scale, top: `calc(-5vh + ${i * 25}px)` }}
        >
          <div className={`${i % 2 !== 0 ? 'text-secondary' : 'text-white'} p-6 md:px-12 md:pt-16 md:pb-8 h-full flex flex-col justify-between`}>
            <div>
              <h3 className="font-semibold text-3xl">{name}</h3>
              <p className="text-sm mt-4">{brief}</p>
            </div>
            <div className="mt-6 flex items-center gap-x-4">
              <a href={repository} target="_blank" rel="noopener noreferrer">
              <Button isIconOnly variant='solid' color={`${i % 2 !== 0 ? 'secondary' : 'primary'}`}>
                <FaGithub className='text-2xl text-white' />
              </Button>
              </a>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <Button color='primary' variant='ghost' endContent={<FaArrowRight />}>
                  View Demo
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-r-2xl p-6 hidden md:block bg-container">
            <img src={projectImg} alt={`Thumbnail for ${name}`} className="rounded-xl w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="section-container section-side-projects">
      <HeadingPrimary title='Side Projects' subtitle='My popular contributions' />

      <div ref={container} className='pt-8 pb-[8vh] mx-auto max-w-screen-lg'>
        {sideProjects.map((sideProject: SideProject, i: number) => {
          const targetScale = 1 - (sideProjects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...sideProject}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SideProjects;