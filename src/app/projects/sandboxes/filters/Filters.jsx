'use client';
import CalendarIcon from '@/app/icons/Calendar';
import CloseIcon from '@/app/icons/Close';
import FactoryIcon from '@/app/icons/Factory';
import GraduateCapIcon from '@/app/icons/GraduateCap';
import GroupIcon from '@/app/icons/Group';
import LightningIcon from '@/app/icons/Lightning';
import ListIcon from '@/app/icons/List';
import LocationMarkerIcon from '@/app/icons/LocationMarker';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { peopleData } from './people';

function FiltersComponent() {
  const [hqFilled, setHqFilled] = useState(false);
  const [roleFilled, setRoleFilled] = useState(false);
  const [locationFilled, setLocationFilled] = useState(false);
  const [skillsFilled, setSkillsFilled] = useState(false);
  const [industryFilled, setIndustryFilled] = useState(false);
  const [headCountFilled, setHeadCountFilled] = useState(false);
  const [foundedFilled, setFoundedFilled] = useState(false);
  const [filteredPeople, setFilteredPeople] = useState(peopleData);

  const filters = [
    {
      name: 'Company HQ location',
      icon: <GraduateCapIcon />,
      variable: hqFilled,
      values: ['New York, USA'],
    },
    {
      name: 'Job information',
      icon: <ListIcon />,
      variable: roleFilled,
      values: ['Product Manager'],
    },
    {
      name: 'Location',
      icon: <LocationMarkerIcon />,
      variable: locationFilled,
      values: ['Remote'],
    },
    {
      name: 'Skills',
      icon: <LightningIcon />,
      variable: skillsFilled,
      values: ['PM Tools', 'Jira'],
    },
    {
      name: 'Industry',
      icon: <FactoryIcon />,
      variable: industryFilled,
      values: ['SaaS'],
    },
    {
      name: 'Headcount',
      icon: <GroupIcon />,
      variable: headCountFilled,
      values: ['201 - 500'],
    },
    {
      name: 'Year Founded',
      icon: <CalendarIcon />,
      variable: foundedFilled,
      values: { from: 2016, to: 2021 },
    },
  ];

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, '');

  useEffect(() => {
    let filtered = peopleData;

    filters.forEach((filter) => {
      const { name, values } = filter;

      if (name === 'Company HQ location' && hqFilled) {
        filtered = filtered.filter((p) =>
          values.some((val) => {
            const cleanedFilterHQ = normalize(val.replace(', USA', ''));
            const cleanedPersonHQ = normalize(p.hq);
            return cleanedFilterHQ === cleanedPersonHQ;
          })
        );
      }

      if (name === 'Job information' && roleFilled) {
        filtered = filtered.filter((p) =>
          values.some((val) => normalize(val) === normalize(p.role))
        );
      }

      if (name === 'Location' && locationFilled) {
        filtered = filtered.filter((p) =>
          values.some((val) => normalize(val) === normalize(p.location))
        );
      }

      if (name === 'Skills' && skillsFilled) {
        filtered = filtered.filter((p) =>
          values.every((skill) =>
            p.skill.some((s) => normalize(s) === normalize(skill))
          )
        );
      }

      if (name === 'Industry' && industryFilled) {
        filtered = filtered.filter((p) =>
          values.some((val) => normalize(val) === normalize(p.industry))
        );
      }

      if (name === 'Headcount' && headCountFilled) {
        filtered = filtered.filter((p) =>
          values.some((val) => normalize(val) === normalize(p.headcount))
        );
      }

      if (name === 'Year Founded' && foundedFilled) {
        filtered = filtered.filter(
          (p) =>
            p['year founded'].from >= values.from &&
            p['year founded'].to <= values.to
        );
      }
    });

    setFilteredPeople(filtered);
  }, [
    hqFilled,
    roleFilled,
    locationFilled,
    skillsFilled,
    industryFilled,
    headCountFilled,
    foundedFilled,
  ]);

  const optionVariants = {
    initial: { opacity: 0, filter: 'blur(4px)', y: '100%' },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
    exit: { opacity: 0, filter: 'blur(4px)', y: '-100%' },
  };

  function filterOptions() {
    let delay = 2000;

    setHqFilled(true);

    setTimeout(() => {
      setRoleFilled(true);

      setTimeout(() => {
        setLocationFilled(true);

        setTimeout(() => {
          setSkillsFilled(true);

          setTimeout(() => {
            setIndustryFilled(true);

            setTimeout(() => {
              setHeadCountFilled(true);

              setTimeout(() => {
                setFoundedFilled(true);
              }, delay);
            }, delay);
          }, delay);
        }, delay);
      }, delay);
    }, delay);
  }

  return (
    <div className='sandbox no-grid h-190 font-inter relative'>
      {/* Filter popover */}
      <div className='z-3 absolute bottom-6 flex w-[65%] flex-col rounded-[16px] bg-[rgba(38,38,38,0.8)] pt-4 text-white backdrop-blur-[20px]'>
        <div className='flex items-center gap-2.5 px-6 pb-3'>
          <h2 className='text-base font-medium'>Apply filters</h2>
          <span className='rounded-[40px] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-xs'>
            3 filters applied
          </span>
        </div>
        <div
          className='flex w-full flex-col overflow-hidden'
          style={{ height: 57 * 5 }}
        >
          <motion.div
            animate={{ y: skillsFilled ? -57 * 2 : 0 }}
            transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
            className='relative flex w-full flex-col'
          >
            {filters.map((filter, index) => (
              <div
                key={index}
                className='flex w-full items-center justify-between border-b border-b-[rgba(255,255,255,0.04)] px-6 py-3'
              >
                <div className='flex items-center gap-1.5 text-gray-400'>
                  <div className='h-4 w-4'>{filter.icon}</div>
                  <span className='text-sm'>{filter.name}</span>
                </div>
                <div className='relative flex h-8 items-center justify-end gap-1'>
                  <AnimatePresence mode='sync' initial={false}>
                    {filter.variable ? (
                      filter.name == 'Year Founded' ? (
                        <motion.div
                          key={index}
                          className='flex items-center justify-end gap-2'
                        >
                          <AnimatePresence mode='sync'>
                            <motion.span
                              variants={optionVariants}
                              initial='initial'
                              animate='visible'
                              exit='exit'
                              transition={{
                                y: {
                                  visualDuration: 0.25,
                                  bounce: 0.4,
                                  type: 'spring',
                                },
                                opacity: {
                                  duration: 0.25,
                                  ease: [0.42, 0, 0.58, 1],
                                },
                                filter: {
                                  duration: 0.25,
                                  ease: [0.165, 0.84, 0.44, 1],
                                },
                              }}
                              className='flex items-center gap-2 rounded-full bg-[rgba(0,0,0,0.1)] px-3 py-2 text-xs text-gray-300'
                            >
                              <span className='text-gray-500'>
                                from:{' '}
                                <span className='text-gray-200'>
                                  {filter.values.from}
                                </span>
                              </span>
                              <div className='h-3 w-3 text-gray-500'>
                                <CloseIcon />
                              </div>
                            </motion.span>
                          </AnimatePresence>
                          <AnimatePresence mode='sync'>
                            <motion.span
                              variants={optionVariants}
                              initial='initial'
                              animate='visible'
                              exit='exit'
                              transition={{
                                y: {
                                  visualDuration: 0.25,
                                  bounce: 0.4,
                                  type: 'spring',
                                },
                                opacity: {
                                  duration: 0.25,
                                  ease: [0.42, 0, 0.58, 1],
                                },
                                filter: {
                                  duration: 0.25,
                                  ease: [0.165, 0.84, 0.44, 1],
                                },
                                delay: 0.4,
                              }}
                              className='flex items-center gap-2 rounded-full bg-[rgba(0,0,0,0.1)] px-3 py-2 text-xs text-gray-300'
                            >
                              <span className='text-gray-500'>
                                to:{' '}
                                <span className='text-gray-200'>
                                  {filter.values.to}
                                </span>
                              </span>
                              <div className='h-3 w-3 text-gray-500'>
                                <CloseIcon />
                              </div>
                            </motion.span>
                          </AnimatePresence>
                        </motion.div>
                      ) : (
                        filter.values.map((value, i) => (
                          <motion.span
                            key={value}
                            variants={optionVariants}
                            initial='initial'
                            animate='visible'
                            exit='exit'
                            transition={{
                              delay: i * 0.25,
                              y: {
                                visualDuration: 0.25,
                                bounce: 0.4,
                                type: 'spring',
                              },
                              opacity: {
                                duration: 0.25,
                                ease: [0.42, 0, 0.58, 1],
                              },
                              filter: {
                                duration: 0.25,
                                ease: [0.165, 0.84, 0.44, 1],
                              },
                            }}
                            className='flex items-center gap-2 rounded-full bg-[rgba(0,0,0,0.1)] px-3 py-2 text-xs text-gray-300'
                          >
                            <span>{value}</span>
                            <div className='h-3 w-3 text-gray-500'>
                              <CloseIcon />
                            </div>
                          </motion.span>
                        ))
                      )
                    ) : (
                      <motion.span
                        variants={optionVariants}
                        exit='exit'
                        key={'awaiting' + index}
                        transition={{
                          y: {
                            visualDuration: 0.25,
                            bounce: 0.4,
                            type: 'spring',
                          },
                          opacity: {
                            duration: 0.25,
                            ease: [0.42, 0, 0.58, 1],
                          },
                          filter: {
                            duration: 0.25,
                            ease: [0.165, 0.84, 0.44, 1],
                          },
                        }}
                        className='absolute right-0 h-fit w-fit rounded-full bg-[rgba(0,0,0,0.1)] px-3 py-2 text-xs text-gray-300'
                      >
                        <span className='text-nowrap'>Awaiting filter</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className='relative flex w-full items-center justify-center py-4'>
          <button
            onClick={() => {
              if (!hqFilled) {
                filterOptions();
              }
            }}
            className='rounded-[24px] bg-[rgba(255,255,255,0.1)] transition-colors hover:bg-[rgba(255,255,255,0.06)]'
          >
            <div className='flex items-center justify-center gap-1 py-1.5 pl-1.5 pr-3 text-center text-[13px] font-medium text-gray-200'>
              <div className='relative flex h-4 w-4 items-center justify-center'>
                <DotLottieReact
                  src='https://lottie.host/cf5fad4b-3e4b-4c60-943e-1408f104ff85/DOxlUl3QNG.lottie'
                  loop
                  autoplay
                  className='absolute h-16 w-16'
                />
              </div>
              <div>
                <span>Apply</span> preselected filters
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Underlying faces */}
      <div
        className='mask-radial-at-center mask-radial-from-[#1d1d1d] mask-radial-to-[rgba(29,29,29,0)] mask-radial-from-50% 
      mask-radial-to-95% mask-radial-closest-side absolute inset-0 flex h-full w-full
       flex-col items-center justify-center gap-8'
      >
        <div className='flex max-w-[120%] flex-wrap items-center justify-center gap-8'>
          {filteredPeople?.map((person, index) => (
            <div
              key={`${person.name}-${index}`}
              className='animate-orbit relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full'
              style={{ animationDelay: `${Math.random() * 1.5}s` }}
            >
              <div className='bg-radial z-2 absolute inset-0 h-full w-full from-[rgba(29,29,29,0.3)] from-20% to-[rgba(29,29,29,1)] to-60%' />
              <Image
                alt={`Person's face`}
                fill
                src={person.image}
                className='inset-auto h-[95%] w-[95%] overflow-hidden rounded-full object-cover object-center'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiltersComponent;
