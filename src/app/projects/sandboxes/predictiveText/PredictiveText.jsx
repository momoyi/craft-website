'use client';
import CircleArrowUpIcon from '@/app/icons/CirlceArrowUp';
import ImageIcon from '@/app/icons/Image';
import MicrophoneIcon from '@/app/icons/Microphone';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';

function PredictiveText() {
  const [inputValue, setInputValue] = useState('');
  const [empty, setEmpty] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [instructionVisible, setInstructionVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ref, bounds] = useMeasure();
  const inputRef = useRef(null);
  let isRequestSuccessful = false;

  useEffect(() => {
    console.log(bounds.width);
  }, [bounds]);

  const fetchSuggestions = useCallback(
    debounce(async (fullInput) => {
      const words = fullInput.trim().split(' ');
      const lastWord = words[words.length - 1];

      if (!lastWord) return setSuggestions([]);

      try {
        isRequestSuccessful = false;
        const res = await axios.get(
          `https://api.datamuse.com/sug?s=${lastWord}`
        );
        const topSuggestions = res.data
          .filter(
            (item) => !item.word.includes(' ') && !item.word.includes('-')
          )
          .slice(0, 3)
          .map((item) => item.word);
        setSuggestions(topSuggestions);
        isRequestSuccessful = true;
      } catch (err) {
        console.error('Error fetching suggestions', err);
      } finally {
        if (isRequestSuccessful) {
          setLoading(false);
        }
      }
    }, 300),
    []
  );

  function handleInputChange(e) {
    const val = e.target.value;
    setActiveIndex(null);
    setInputValue(val);
    fetchSuggestions(val);
    setEmpty(val.trim() === '');

    if (val.trim() === '') {
      setLoading(true);
      setSuggestionsVisible(false);
    } else {
      setSuggestionsVisible(true);
    }
  }

  function handleKeyDown(e) {
    if (suggestions.length === 0) return;

    if (e.key === 'Tab') {
      e.preventDefault();
      if (activeIndex === null) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => (prev + 1) % suggestions.length);
      }
    }

    if (e.key === 'Enter' && activeIndex !== null) {
      // Assign word
      const words = inputValue.trim().split(' ');
      words[words.length - 1] = suggestions[activeIndex];
      setInputValue(words.join(' '));

      // Set variables
      setSuggestionsVisible(false);
      setSuggestions([]);
      setLoading(true);
      setActiveIndex(null);
    }
  }

  return (
    <div
      className='sandbox font-inter h-100'
      style={{ '--bg-color': 'hsl(0,0%,9%)' }}
    >
      <div className='relative'>
        <AnimatePresence mode='popLayout'>
          {suggestionsVisible && (
            <motion.div
              key={suggestionsVisible}
              initial={{
                transform: 'translateY(100%)',
                filter: 'blur(5px)',
                opacity: 0,
              }}
              animate={{
                transform: 'translateY(0)',
                filter: 'blur(0)',
                opacity: 1,
              }}
              exit={{
                transform: 'translateY(100%)',
                filter: 'blur(4px)',
                opacity: 0,
              }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className='bottom-17 absolute will-change-transform'
            >
              <AnimatePresence>
                <motion.div
                  key={instructionVisible}
                  exit={{
                    transform: 'translateY(-8px)',
                    filter: 'blur(6px)',
                    opacity: 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                >
                  {instructionVisible && (
                    <div
                      className='-top-13 bg-(--background) absolute left-5 flex items-center justify-center rounded-xl px-3 py-2 text-center text-sm font-medium text-gray-500'
                      style={{ '--background': 'hsl(0,0%,95%)' }}
                    >
                      <span className='z-2 relative w-fit whitespace-nowrap'>
                        Toggle suggestions with&nbsp;
                        <span className='text-gray-800'>Tab</span>
                      </span>
                      <div className='bg-(--background) -bottom-1.25 rounded-xs absolute left-6 h-4 w-4 rotate-45'></div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <motion.div
                animate={{ width: bounds.width + 4 || 'auto' }}
                className='bg-(--border-color) flex h-9 gap-0.5 overflow-hidden rounded-[40px] p-0.5'
                style={{ '--border-color': 'hsl(0,0%,18%)' }}
              >
                <div className='h-full w-fit' ref={ref}>
                  <AnimatePresence mode='popLayout'>
                    <motion.div
                      className='flex h-full w-fit items-center gap-0.5'
                      key={loading}
                      initial={{
                        transform: 'scale(0.93)',
                        opacity: 0,
                        filter: 'blur(5px)',
                      }}
                      animate={{
                        transform: 'scale(1)',
                        opacity: 1,
                        filter: 'blur(0px)',
                      }}
                      exit={{
                        transform: 'scale(0.93)',
                        opacity: 0,
                        filter: 'blur(5px)',
                      }}
                    >
                      {loading ? (
                        <div className='flex h-full w-20 items-center justify-center space-x-1 text-xl text-white'>
                          <div className='h-1 w-1 animate-bounce rounded-full bg-white' />
                          <div className='h-1 w-1 animate-bounce rounded-full bg-white [animation-delay:0.2s]' />
                          <div className='h-1 w-1 animate-bounce rounded-full bg-white [animation-delay:0.4s]' />
                        </div>
                      ) : (
                        <AnimatePresence mode='popLayout'>
                          <motion.div
                            className='flex h-fit w-fit items-center gap-0.5 will-change-contents'
                            key={suggestions}
                          >
                            {suggestions.map((suggestion, index) => (
                              <div
                                key={index}
                                className={`nth-last-1:rounded-l-lg nth-1:rounded-l-[40px]! nth-1:rounded-r-lg nth-last-1:rounded-r-[40px] w-26 flex h-8 items-center justify-center rounded-sm bg-[#1d1d1d] px-2 py-2 text-center
                      ${index === activeIndex ? 'font-semibold text-[#2685f2]' : 'text-white'}
                    `}
                              >
                                <motion.span
                                  key={suggestion}
                                  initial={{
                                    opacity: 0,
                                  }}
                                  animate={{
                                    opacity: 1,
                                  }}
                                  exit={{
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    ease: [0.42, 0, 0.58, 1],
                                  }}
                                  className='will-change-[opacity]'
                                >
                                  {suggestion}
                                </motion.span>
                              </div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className='w-100 bg-(--bg-color) relative flex items-center gap-2 rounded-xl pr-3'>
          <input
            ref={inputRef}
            className='w-full p-4 pr-0 font-medium text-[hsl(100,0%,95%)] outline-none placeholder:text-[hsl(100,0%,40%)]'
            placeholder='Write a message'
            value={inputValue}
            onChange={(e) => {
              handleInputChange(e);

              if (instructionVisible) {
                setTimeout(() => {
                  setInstructionVisible(false);
                }, 1500);
              }
            }}
            onKeyDown={handleKeyDown}
          />

          <div className='relative flex h-fit items-center'>
            <AnimatePresence mode='popLayout'>
              <motion.div
                initial={{
                  opacity: 0,
                  filter: 'blur(5px)',
                }}
                animate={{
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  filter: 'blur(5px)',
                }}
                key={empty}
                className='relative flex h-fit items-center justify-end'
              >
                {empty ? (
                  <div className='absolute flex h-fit gap-3 pr-2 text-[hsl(0,0%,80%)]'>
                    <button className='h-5 w-5'>
                      <MicrophoneIcon />
                    </button>
                    <button className='h-5 w-5'>
                      <ImageIcon />
                    </button>
                  </div>
                ) : (
                  <button className='absolute h-8 w-8 text-white'>
                    <CircleArrowUpIcon />
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictiveText;
