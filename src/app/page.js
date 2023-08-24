'use client'
import React, { useState, useEffect } from 'react';

import NavBar from './components/nav'
import Footer from './components/footer'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, SvgIcon, Tab, Tabs } from '@mui/material';
import BasicTabs from './components/calendar';
import Doubts from './components/doubts';
import { StyledEngineProvider } from '@mui/material/styles';
import * as Info from './info'

export default function Home() {

  const formatValue = value => String(value).padStart(2, '0');

  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const timeDifference = Info.EVENT_DATE - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <div className='font-inter'>
        <NavBar></NavBar>
        <header className='mx-2 px-7 flex flex-col md:flex-row mt-8 justify-center'>
          <div className='md:w-1/2'>
            <span className='font-bold text-4xl md:text-7xl font-poppins'>
              <span className='text-[#38124A]'>28ª</span> SEMANA DE INFORMÁTICA
            </span>
            <div className='mt-12 flex w-1/2 md:w-auto flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5'>
              <Button href={Info.EVENT_SALE_URL} variant="contained" disableElevation className='bt-tickets bg-[#38124A] rounded-3xl py-4 px-7 hover:bg-[#E4E7E5] text-[#F6F6F6] font-bold border-2 border-solid hover:border-[#38124A] hover:text-[#38124A]'>
                <Stack spacing={1} direction="row">
                  <span>INSCRIÇÕES</span>
                  <SvgIcon>
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 0H16.6667V4H12.5V0Z" fill="#FFFFFF" />
                      <path d="M16.6667 4H20.8333V8H16.6667V4Z" fill="#FFFFFF" />
                      <path d="M16.6667 12H20.8333V16H16.6667V12Z" fill="#FFFFFF" />
                      <path d="M12.5 16H16.6667V20H12.5V16Z" fill="#FFFFFF" />
                      <path d="M16.6667 8H20.8333V12H16.6667V8Z" fill="#FFFFFF" />
                      <path d="M12.5 8H16.6667V12H12.5V8Z" fill="#FFFFFF" />
                      <path d="M8.33333 8H12.5V12H8.33333V8Z" fill="#FFFFFF" />
                      <path d="M4.16667 8H8.33333V12H4.16667V8Z" fill="#FFFFFF" />
                      <path d="M0 8H4.16667V12H0V8Z" fill="#FFFFFF" />
                      <path d="M20.8333 8H25V12H20.8333V8Z" fill="#FFFFFF" />
                    </svg>
                  </SvgIcon>
                </Stack>
              </Button>
              <Button href='#programacao' variant="contained" disableElevation className='bg-transparent rounded-3xl py-4 px-7 hover:bg-black text-black font-bold border-2 border-solid border-black hover:border-black hover:text-white'>
                <Stack spacing={1} direction="row">
                  <span>PROGRAMAÇÃO</span>
                </Stack>
              </Button>
            </div>
          </div>
          <div>
            <img src='/SI2023/header_computer.png' width={455} height={375}></img>
          </div>
        </header>
        <div>
          <div className='mr-4 md:w-3/4 bg-[#38124A] rounded-bl-3xl rounded-tr-3xl rounded-br-3xl md:rounded-br-none p-8 flex flex-col items-center'>
            <span className='text-xl font-bold text-white w-full'>O evento começa em:</span>
            <div className='flex space-x-2 md:space-x-8 mt-5 text-white font-bold justify-center'>
              <div className='flex flex-col items-center'>
                <span className='text-4xl md:text-8xl bg-white text-[#38124A] my-4 mx-2 p-4 rounded-3xl font-poppins md:w-40 text-center'>{formatValue(timeLeft.days)}</span>
                <span>DIAS</span>
              </div>
              <span className='text-8xl md:text-9xl'>:</span>
              <div className='flex flex-col items-center'>
                <span className='text-4xl md:text-8xl bg-white text-[#38124A] my-4 mx-2 p-4 rounded-3xl font-poppins md:w-40 text-center'>{formatValue(timeLeft.hours)}</span>
                <span>HORAS</span>
              </div>
              <span className='text-8xl md:text-9xl'>:</span>
              <div className='flex flex-col items-center'>
                <span className='text-4xl md:text-8xl bg-white text-[#38124A] my-4 mx-2 p-4 rounded-3xl font-poppins md:w-40 text-center'>{formatValue(timeLeft.minutes)}</span>
                <span>MINUTOS</span>
              </div>
            </div>
          </div>
          <div className='flex justify-between mx-2 md:mx-20 -mt-5  md:-mt-20'>
            <svg width="165" height="110" viewBox="0 0 165 110" fill="none" xmlns="http://www.w3.org/2000/svg" className='-mt-8 md:mt-5 -z-20 w-20 md:w-40'>
              <circle cx="5.00518" cy="104.005" r="5" transform="rotate(-89.9406 5.00518 104.005)" fill="black" />
              <circle cx="5.03936" cy="71.0052" r="5" transform="rotate(-89.9406 5.03936 71.0052)" fill="black" />
              <circle cx="5.07354" cy="38.0052" r="5" transform="rotate(-89.9406 5.07354 38.0052)" fill="black" />
              <circle cx="5.10784" cy="5.00519" r="5" transform="rotate(-89.9406 5.10784 5.00519)" fill="black" />
              <circle cx="19.0228" cy="87.0198" r="5" transform="rotate(-89.9406 19.0228 87.0198)" fill="black" />
              <circle cx="19.0571" cy="54.0198" r="5" transform="rotate(-89.9406 19.0571 54.0198)" fill="black" />
              <circle cx="19.0912" cy="21.0198" r="5" transform="rotate(-89.9406 19.0912 21.0198)" fill="black" />
              <circle cx="33.0052" cy="104.034" r="5" transform="rotate(-89.9406 33.0052 104.034)" fill="black" />
              <circle cx="33.0394" cy="71.034" r="5" transform="rotate(-89.9406 33.0394 71.034)" fill="black" />
              <circle cx="33.0735" cy="38.0345" r="5" transform="rotate(-89.9406 33.0735 38.0345)" fill="black" />
              <circle cx="33.1078" cy="5.03448" r="5" transform="rotate(-89.9406 33.1078 5.03448)" fill="black" />
              <circle cx="47.0228" cy="87.0486" r="5" transform="rotate(-89.9406 47.0228 87.0486)" fill="black" />
              <circle cx="47.0569" cy="54.0486" r="5" transform="rotate(-89.9406 47.0569 54.0486)" fill="black" />
              <circle cx="47.0912" cy="21.0486" r="5" transform="rotate(-89.9406 47.0912 21.0486)" fill="black" />
              <circle cx="61.0052" cy="104.063" r="5" transform="rotate(-89.9406 61.0052 104.063)" fill="black" />
              <circle cx="61.0394" cy="71.0633" r="5" transform="rotate(-89.9406 61.0394 71.0633)" fill="black" />
              <circle cx="61.0735" cy="38.0633" r="5" transform="rotate(-89.9406 61.0735 38.0633)" fill="black" />
              <circle cx="61.1077" cy="5.06329" r="5" transform="rotate(-89.9406 61.1077 5.06329)" fill="black" />
              <circle cx="75.0228" cy="87.0779" r="5" transform="rotate(-89.9406 75.0228 87.0779)" fill="black" />
              <circle cx="75.0569" cy="54.0779" r="5" transform="rotate(-89.9406 75.0569 54.0779)" fill="black" />
              <circle cx="75.0912" cy="21.0779" r="5" transform="rotate(-89.9406 75.0912 21.0779)" fill="black" />
              <circle cx="89.0052" cy="104.092" r="5" transform="rotate(-89.9406 89.0052 104.092)" fill="black" />
              <circle cx="89.0394" cy="71.0921" r="5" transform="rotate(-89.9406 89.0394 71.0921)" fill="black" />
              <circle cx="89.0735" cy="38.0921" r="5" transform="rotate(-89.9406 89.0735 38.0921)" fill="black" />
              <circle cx="89.1077" cy="5.0921" r="5" transform="rotate(-89.9406 89.1077 5.0921)" fill="black" />
              <circle cx="103.023" cy="87.1068" r="5" transform="rotate(-89.9406 103.023 87.1068)" fill="black" />
              <circle cx="103.057" cy="54.1067" r="5" transform="rotate(-89.9406 103.057 54.1067)" fill="black" />
              <circle cx="103.091" cy="21.1067" r="5" transform="rotate(-89.9406 103.091 21.1067)" fill="black" />
              <circle cx="117.005" cy="104.121" r="5" transform="rotate(-89.9406 117.005 104.121)" fill="black" />
              <circle cx="117.039" cy="71.1214" r="5" transform="rotate(-89.9406 117.039 71.1214)" fill="black" />
              <circle cx="117.074" cy="38.1214" r="5" transform="rotate(-89.9406 117.074 38.1214)" fill="black" />
              <circle cx="117.108" cy="5.1214" r="5" transform="rotate(-89.9406 117.108 5.1214)" fill="black" />
              <circle cx="131.023" cy="87.136" r="5" transform="rotate(-89.9406 131.023 87.136)" fill="black" />
              <circle cx="131.057" cy="54.136" r="5" transform="rotate(-89.9406 131.057 54.136)" fill="black" />
              <circle cx="131.091" cy="21.136" r="5" transform="rotate(-89.9406 131.091 21.136)" fill="black" />
              <circle cx="145.005" cy="104.15" r="5" transform="rotate(-89.9406 145.005 104.15)" fill="black" />
              <circle cx="145.039" cy="71.1502" r="5" transform="rotate(-89.9406 145.039 71.1502)" fill="black" />
              <circle cx="145.074" cy="38.1502" r="5" transform="rotate(-89.9406 145.074 38.1502)" fill="black" />
              <circle cx="145.108" cy="5.15021" r="5" transform="rotate(-89.9406 145.108 5.15021)" fill="black" />
              <circle cx="159.023" cy="87.1649" r="5" transform="rotate(-89.9406 159.023 87.1649)" fill="black" />
              <circle cx="159.057" cy="54.1649" r="5" transform="rotate(-89.9406 159.057 54.1649)" fill="black" />
              <circle cx="159.091" cy="21.1649" r="5" transform="rotate(-89.9406 159.091 21.1649)" fill="black" />
            </svg>
            <img className='md:w-[422px] w-[215px]' src='/SI2023/planalto_da_ufv.png' width={422} height={261}></img>
          </div>
        </div>
        <div id='evento' className='mx-5 md:mx-20 mt-10 md:mt-0 flex flex-col'>
          <span className='text-4xl md:text-6xl font-bold font-poppins'>
            NOSSO <span className='text-[#38124A]'>OBJETIVO</span>
          </span>
          <span className='mt-6 text-justify text-lg'>
            {Info.EVENT_DESCRIPTION}
          </span >
          <Button href='#programacao' variant="contained" disableElevation className='w-min mt-5 bg-transparent rounded-3xl py-4 px-7 hover:bg-black text-black font-bold border-2 border-solid border-black hover:border-black hover:text-white'>
            <Stack spacing={1} direction="row">
              <span>PROGRAMAÇÃO</span>
            </Stack>
          </Button>
        </div>
        <div className="my-10 text-white">
          <div className='bg-gradient-to-b from-transparent to-[#38124A] h-20'></div>
          <div className='bg-[#38124A] flex-col-reverse md:flex-row flex justify-evenly p-8 md:p-16'>
            <img className='md:w-1/3' src='/SI2023/maratona_antiga.png' width={468} height={621}></img>
            <div className='md:w-1/3 flex flex-col items-center justify-center' id='maratona'>
              <span className='text-4xl md:text-6xl font-bold font-poppins'>MARATONA</span>
              <span className='mt-8 text-justify'>{Info.EVENT_MARATONA_DESCRITION}</span >
              <Button href={Info.EVENT_MARATONA_SUBSCRIPTION_URL } variant="contained" disableElevation className='mb-10 md:mb-0 bt-tickets-invert hover:bg-[#38124A] rounded-3xl py-4 px-7 bg-[#E4E7E5] hover:text-[#F6F6F6] font-bold border-2 border-solid hover:border-[#E4E7E5] text-[#38124A] mt-10'>
                <Stack spacing={1} direction="row">
                  <span>INSCRIÇÕES ENCERRADAS</span>
                </Stack>
              </Button>
            </div>
          </div>
          <div className='bg-gradient-to-b to-transparent from-[#38124A] h-20'></div>
        </div>
        <div className='mb-10' id='programacao'>
          <div className='flex justify-center'>
            <svg className='-mr-5 md:-mr-8 -mt-7 z-10 w-10 md:w-16' width="70" height="73" viewBox="0 0 70 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.8209 15.9325L38.4799 28.8717L27.3029 32.0078L28.8209 15.9325Z" fill="#38124A" />
              <path d="M40.3626 57.0671L41.8806 40.9917L30.7036 44.1279L40.3626 57.0671Z" fill="#38124A" />
              <path d="M53.2834 31.2551L38.3738 28.8051L41.8246 41.1037L53.2834 31.2551Z" fill="#38124A" />
              <path d="M15.9002 41.7444L30.8098 44.1944L27.359 31.8958L15.9002 41.7444Z" fill="#38124A" />
              <path d="M43.9703 18.402L42.4879 34.4831L32.2223 27.8515L43.9703 18.402Z" fill="#38124A" />
              <path d="M25.2133 54.5973L36.9613 45.1478L26.6956 38.5162L25.2133 54.5973Z" fill="#38124A" />
              <path d="M51.7593 47.5899L42.4541 34.3564L36.846 45.1783L51.7593 47.5899Z" fill="#38124A" />
              <path d="M17.4243 25.4094L26.7295 38.6428L32.3375 27.821L17.4243 25.4094Z" fill="#38124A" />
              <rect x="27.3113" y="31.9395" width="11.5556" height="12.7152" transform="rotate(-15.6733 27.3113 31.9395)" fill="#38124A" />
            </svg>
            <span className='text-4xl md:text-6xl font-bold font-poppins'>PROGRAMAÇÃO</span>
            <svg className='w-8 md:w-20' width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.89752 27.4463C2.89752 27.4463 7.48161 21.4938 12.5211 18.5304C15.2052 16.9521 18.1748 15.5711 21.0417 14.8905M21.0417 14.8905C23.6544 14.2702 26.1818 14.2315 28.3304 15.1551C32.9768 17.1522 30.1057 20.7574 27.7395 22.5291C25.3732 24.3008 21.7975 25.9878 20.0894 21.3255C19.3756 19.3771 19.8603 17.1288 21.0417 14.8905ZM21.0417 14.8905C22.6873 11.7727 25.6846 8.67444 28.6768 6.43396C33.8172 2.58502 41.7507 3.48682 41.7507 3.48682" stroke="#38124A" stroke-width="5" stroke-linecap="round" />
            </svg>
          </div>
          <span className='text-lg mx-5 md:mx-20   text-justify md:text-center mt-5'>
            {Info.EVENT_SCHEDULE_DESCRIPTION}
          </span >
        </div>
        <BasicTabs></BasicTabs>
        <div className='mx-5 md:mx-20 mt-20' id="parceiros">
          <div className='flex justify-between'>
            <span className='text-4xl md:text-6xl font-bold font-poppins'>
              NOSSOS <span className='text-[#38124A]'>PATROCINADORES</span>
            </span>
            <svg className='-mt-8 md:-mt-14 -mr-20' width="165" height="110" viewBox="0 0 165 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.00518" cy="104.005" r="5" transform="rotate(-89.9406 5.00518 104.005)" fill="black" />
              <circle cx="5.03936" cy="71.0052" r="5" transform="rotate(-89.9406 5.03936 71.0052)" fill="black" />
              <circle cx="5.0736" cy="38.0052" r="5" transform="rotate(-89.9406 5.0736 38.0052)" fill="black" />
              <circle cx="5.10778" cy="5.00519" r="5" transform="rotate(-89.9406 5.10778 5.00519)" fill="black" />
              <circle cx="19.0228" cy="87.0197" r="5" transform="rotate(-89.9406 19.0228 87.0197)" fill="black" />
              <circle cx="19.057" cy="54.0197" r="5" transform="rotate(-89.9406 19.057 54.0197)" fill="black" />
              <circle cx="19.0912" cy="21.0197" r="5" transform="rotate(-89.9406 19.0912 21.0197)" fill="black" />
              <circle cx="33.0052" cy="104.034" r="5" transform="rotate(-89.9406 33.0052 104.034)" fill="black" />
              <circle cx="33.0394" cy="71.0342" r="5" transform="rotate(-89.9406 33.0394 71.0342)" fill="black" />
              <circle cx="33.0736" cy="38.0342" r="5" transform="rotate(-89.9406 33.0736 38.0342)" fill="black" />
              <circle cx="33.1078" cy="5.03424" r="5" transform="rotate(-89.9406 33.1078 5.03424)" fill="black" />
              <circle cx="47.0228" cy="87.0488" r="5" transform="rotate(-89.9406 47.0228 87.0488)" fill="black" />
              <circle cx="47.057" cy="54.0488" r="5" transform="rotate(-89.9406 47.057 54.0488)" fill="black" />
              <circle cx="47.0912" cy="21.0488" r="5" transform="rotate(-89.9406 47.0912 21.0488)" fill="black" />
              <circle cx="61.0052" cy="104.063" r="5" transform="rotate(-89.9406 61.0052 104.063)" fill="black" />
              <circle cx="61.0394" cy="71.0633" r="5" transform="rotate(-89.9406 61.0394 71.0633)" fill="black" />
              <circle cx="61.0735" cy="38.0633" r="5" transform="rotate(-89.9406 61.0735 38.0633)" fill="black" />
              <circle cx="61.1078" cy="5.06329" r="5" transform="rotate(-89.9406 61.1078 5.06329)" fill="black" />
              <circle cx="75.0228" cy="87.0778" r="5" transform="rotate(-89.9406 75.0228 87.0778)" fill="black" />
              <circle cx="75.057" cy="54.0778" r="5" transform="rotate(-89.9406 75.057 54.0778)" fill="black" />
              <circle cx="75.0912" cy="21.0778" r="5" transform="rotate(-89.9406 75.0912 21.0778)" fill="black" />
            </svg>

          </div>
          <span className='text-lg text-justify md:text-center my-5 '>
            {Info.EVENT_SPONSORS_DESCRIPTION}
          </span >
          <div className="bg-[#38124A] -mx-20 py-10 overflow-hidden">
            <div className="flex space-x-8 animate-infinite-slider infinite">
              {Info.EVENT_SPONSORS.map((image, index) => (
                <img key={index} className='slide flex w-40 md:w-72 items-center justify-center' src={image}></img>  
              ))}
              {Info.EVENT_SPONSORS.map((image, index) => (
                <img key={Info.EVENT_SPONSORS.length + index} className='slide flex w-40 md:w-72 items-center justify-center' src={image}></img>  
              ))}
            </div>
          </div>
          <svg className='-mt-5 md:mt-0 -ml-14 md:ml-0 w-20 md:w-40' width="165" height="110" viewBox="0 0 165 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.00518" cy="104.005" r="5" transform="rotate(-89.9406 5.00518 104.005)" fill="black" />
            <circle cx="5.03936" cy="71.0052" r="5" transform="rotate(-89.9406 5.03936 71.0052)" fill="black" />
            <circle cx="5.07354" cy="38.0052" r="5" transform="rotate(-89.9406 5.07354 38.0052)" fill="black" />
            <circle cx="5.10784" cy="5.00525" r="5" transform="rotate(-89.9406 5.10784 5.00525)" fill="black" />
            <circle cx="19.0228" cy="87.0197" r="5" transform="rotate(-89.9406 19.0228 87.0197)" fill="black" />
            <circle cx="19.0571" cy="54.0197" r="5" transform="rotate(-89.9406 19.0571 54.0197)" fill="black" />
            <circle cx="19.0912" cy="21.0198" r="5" transform="rotate(-89.9406 19.0912 21.0198)" fill="black" />
            <circle cx="33.0052" cy="104.034" r="5" transform="rotate(-89.9406 33.0052 104.034)" fill="black" />
            <circle cx="33.0394" cy="71.0342" r="5" transform="rotate(-89.9406 33.0394 71.0342)" fill="black" />
            <circle cx="33.0735" cy="38.0342" r="5" transform="rotate(-89.9406 33.0735 38.0342)" fill="black" />
            <circle cx="33.1078" cy="5.03424" r="5" transform="rotate(-89.9406 33.1078 5.03424)" fill="black" />
            <circle cx="47.0228" cy="87.0487" r="5" transform="rotate(-89.9406 47.0228 87.0487)" fill="black" />
            <circle cx="47.0569" cy="54.0488" r="5" transform="rotate(-89.9406 47.0569 54.0488)" fill="black" />
            <circle cx="47.0912" cy="21.0488" r="5" transform="rotate(-89.9406 47.0912 21.0488)" fill="black" />
            <circle cx="61.0052" cy="104.063" r="5" transform="rotate(-89.9406 61.0052 104.063)" fill="black" />
            <circle cx="61.0394" cy="71.0632" r="5" transform="rotate(-89.9406 61.0394 71.0632)" fill="black" />
            <circle cx="61.0735" cy="38.0633" r="5" transform="rotate(-89.9406 61.0735 38.0633)" fill="black" />
            <circle cx="61.1077" cy="5.06329" r="5" transform="rotate(-89.9406 61.1077 5.06329)" fill="black" />
            <circle cx="75.0228" cy="87.0778" r="5" transform="rotate(-89.9406 75.0228 87.0778)" fill="black" />
            <circle cx="75.0569" cy="54.0778" r="5" transform="rotate(-89.9406 75.0569 54.0778)" fill="black" />
            <circle cx="75.0912" cy="21.0778" r="5" transform="rotate(-89.9406 75.0912 21.0778)" fill="black" />
            <circle cx="89.0052" cy="104.092" r="5" transform="rotate(-89.9406 89.0052 104.092)" fill="black" />
            <circle cx="89.0394" cy="71.0923" r="5" transform="rotate(-89.9406 89.0394 71.0923)" fill="black" />
            <circle cx="89.0735" cy="38.0923" r="5" transform="rotate(-89.9406 89.0735 38.0923)" fill="black" />
            <circle cx="89.1077" cy="5.09234" r="5" transform="rotate(-89.9406 89.1077 5.09234)" fill="black" />
            <circle cx="103.023" cy="87.1068" r="5" transform="rotate(-89.9406 103.023 87.1068)" fill="black" />
            <circle cx="103.057" cy="54.1068" r="5" transform="rotate(-89.9406 103.057 54.1068)" fill="black" />
            <circle cx="103.091" cy="21.1068" r="5" transform="rotate(-89.9406 103.091 21.1068)" fill="black" />
            <circle cx="117.005" cy="104.121" r="5" transform="rotate(-89.9406 117.005 104.121)" fill="black" />
            <circle cx="117.039" cy="71.1213" r="5" transform="rotate(-89.9406 117.039 71.1213)" fill="black" />
            <circle cx="117.074" cy="38.1213" r="5" transform="rotate(-89.9406 117.074 38.1213)" fill="black" />
            <circle cx="117.108" cy="5.12134" r="5" transform="rotate(-89.9406 117.108 5.12134)" fill="black" />
            <circle cx="131.023" cy="87.1358" r="5" transform="rotate(-89.9406 131.023 87.1358)" fill="black" />
            <circle cx="131.057" cy="54.1358" r="5" transform="rotate(-89.9406 131.057 54.1358)" fill="black" />
            <circle cx="131.091" cy="21.1359" r="5" transform="rotate(-89.9406 131.091 21.1359)" fill="black" />
            <circle cx="145.005" cy="104.15" r="5" transform="rotate(-89.9406 145.005 104.15)" fill="black" />
            <circle cx="145.039" cy="71.1503" r="5" transform="rotate(-89.9406 145.039 71.1503)" fill="black" />
            <circle cx="145.074" cy="38.1503" r="5" transform="rotate(-89.9406 145.074 38.1503)" fill="black" />
            <circle cx="145.108" cy="5.15039" r="5" transform="rotate(-89.9406 145.108 5.15039)" fill="black" />
            <circle cx="159.023" cy="87.1649" r="5" transform="rotate(-89.9406 159.023 87.1649)" fill="black" />
            <circle cx="159.057" cy="54.1649" r="5" transform="rotate(-89.9406 159.057 54.1649)" fill="black" />
            <circle cx="159.091" cy="21.1649" r="5" transform="rotate(-89.9406 159.091 21.1649)" fill="black" />
          </svg>
        </div>
        <div className='flex justify-center my-5 md:my-10'>
          <svg className='-mr-5 md:-mr-8 -mt-7 z-10 w-10 md:w-16' width="70" height="73" viewBox="0 0 70 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8209 15.9325L38.4799 28.8717L27.3029 32.0078L28.8209 15.9325Z" fill="#38124A" />
            <path d="M40.3626 57.0671L41.8806 40.9917L30.7036 44.1279L40.3626 57.0671Z" fill="#38124A" />
            <path d="M53.2834 31.2551L38.3738 28.8051L41.8246 41.1037L53.2834 31.2551Z" fill="#38124A" />
            <path d="M15.9002 41.7444L30.8098 44.1944L27.359 31.8958L15.9002 41.7444Z" fill="#38124A" />
            <path d="M43.9703 18.402L42.4879 34.4831L32.2223 27.8515L43.9703 18.402Z" fill="#38124A" />
            <path d="M25.2133 54.5973L36.9613 45.1478L26.6956 38.5162L25.2133 54.5973Z" fill="#38124A" />
            <path d="M51.7593 47.5899L42.4541 34.3564L36.846 45.1783L51.7593 47.5899Z" fill="#38124A" />
            <path d="M17.4243 25.4094L26.7295 38.6428L32.3375 27.821L17.4243 25.4094Z" fill="#38124A" />
            <rect x="27.3113" y="31.9395" width="11.5556" height="12.7152" transform="rotate(-15.6733 27.3113 31.9395)" fill="#38124A" />
          </svg>
          <span className='text-4xl md:text-6xl font-bold font-poppins'>PERGUNTAS <span className='text-[#38124A]'>FREQUENTES</span></span>
        </div>
        <Doubts></Doubts>
        <Footer></Footer>
      </div>
    </StyledEngineProvider>
  )
}
