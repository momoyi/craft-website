'use client';
import CircleArrowUpIcon from '@/app/icons/CirlceArrowUp';
import ImageIcon from '@/app/icons/Image';
import MicrophoneIcon from '@/app/icons/Microphone';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

function PredictiveText() {
  const [inputValue, setInputValue] = useState('');
  const [empty, setEmpty] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  //const [words, setWords] = useState(['why', 'what', 'salad']);

  const fetchSuggestions = useCallback(
    debounce(async (fullInput) => {
      const words = fullInput.trim().split(' ');
      const lastWord = words[words.length - 1];

      if (!lastWord) return setSuggestions([]);

      try {
        const res = await axios.get(
          `https://api.datamuse.com/sug?s=${lastWord}`
        );
        const topSuggestions = res.data
          .filter((item) => !item.word.includes(' ')) // ✅ ensure it's a single word
          .slice(0, 3)
          .map((item) => item.word);
        setSuggestions(topSuggestions);
      } catch (err) {
        console.error('Error fetching suggestions', err);
      }
    }, 300),
    []
  );

  function handleInputChange(e) {
    let val = e.target.value;
    setInputValue(val);
    setEmpty(val.trim() === '');
    fetchSuggestions(val);
  }

  return (
    <div
      className='sandbox font-inter h-100'
      style={{ '--bg-color': 'hsl(0,0%,9%)' }}
    >
      <div className='relative'>
        {!empty && (
          <div className='absolute -top-12'>
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
            <div
              className='bg-(--border-color) flex w-fit gap-0.5 overflow-hidden rounded-[40px] p-0.5'
              style={{ '--border-color': 'hsl(0,0%,18%)' }}
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className='nth-1:rounded-l-[40px] nth-1:rounded-r-lg nth-last-1:rounded-r-[40px] nth-last-1:rounded-l-lg flex h-8 w-24 items-center justify-center rounded-sm bg-[#1d1d1d] px-2 py-2 text-center'
                >
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='w-100 relative flex items-center'>
          <div className='absolute right-3 flex h-fit items-center'>
            {empty ? (
              <div className='flex gap-3 pr-2 text-[hsl(0,0%,80%)]'>
                <button className='h-5 w-5'>
                  <MicrophoneIcon />
                </button>
                <button className='h-5 w-5'>
                  <ImageIcon />
                </button>
              </div>
            ) : (
              <button className='h-8 w-8 text-white'>
                <CircleArrowUpIcon />
              </button>
            )}
          </div>

          <input
            className='bg-(--bg-color) w-full rounded-xl p-4 font-semibold text-[hsl(100,0%,95%)] outline-none placeholder:text-[hsl(100,0%,40%)]'
            placeholder='Write a message'
            value={inputValue}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PredictiveText;
