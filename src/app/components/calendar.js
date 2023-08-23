'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'
import * as Info from '../info'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChangeCalendar = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Box className="flex flex-col items-center mb-10 border-transparent" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='' value={value} onChange={handleChange} aria-label="basic tabs" variant='fullWidth'>
                    <Tab className='mx-5 aria-selected:bg-[#38124A] aria-selected:text-white rounded-3xl py-4 px-7 text-black font-bold border-2 border-solid aria-selected:border-[#38124A] hover:bg-[#38124A] hover:border-[#38124A] hover:text-white' label="DIA 1" {...a11yProps(0)} />
                    <Tab className='mx-5 aria-selected:bg-[#38124A] aria-selected:text-white rounded-3xl py-4 px-7 text-black font-bold border-2 border-solid aria-selected:border-[#38124A] hover:bg-[#38124A] hover:border-[#38124A] hover:text-white' label="DIA 2" {...a11yProps(1)} />
                    <Tab className='mx-5 aria-selected:bg-[#38124A] aria-selected:text-white rounded-3xl py-4 px-7 text-black font-bold border-2 border-solid aria-selected:border-[#38124A] hover:bg-[#38124A] hover:border-[#38124A] hover:text-white' label="DIA 3" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <div
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-0`}
                aria-labelledby={`simple-tab-0`}>
                <div>
                    {Info.DAY_1_SCHEDULE.map((data, index) => (
                        <Accordion key={index} disableGutters className='bg-transparent my-5 shadow-none mx-5 md:mx-20  ' expanded={expanded === 'day1_schedule' + index} onChange={handleChangeCalendar('day1_schedule' + index)}>
                            <AccordionSummary className='border-solid border-[#38124A] border-2 rounded-2xl w-full'
                                expandIcon={<SvgIcon><svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 15V20H19.2V15H24Z" fill="#38124A" />
                                    <path d="M19.2 20V25H14.4V20H19.2Z" fill="#38124A" />
                                    <path d="M9.6 20V25H4.8V20H9.6Z" fill="#38124A" />
                                    <path d="M4.8 15V20H0V15H4.8Z" fill="#38124A" />
                                    <path d="M14.4 20V25H9.6V20H14.4Z" fill="#38124A" />
                                    <path d="M14.4 15V20H9.6V15H14.4Z" fill="#38124A" />
                                    <path d="M14.4 10L14.4 15H9.6L9.6 10H14.4Z" fill="#38124A" />
                                    <path d="M14.4 5V10H9.6V5H14.4Z" fill="#38124A" />
                                    <path d="M14.4 0V5H9.6V0L14.4 0Z" fill="#38124A" />
                                    <path d="M14.4 25V30H9.6V25H14.4Z" fill="#38124A" />
                                </svg>
                                </SvgIcon>}
                                aria-controls={'day1_schedule' + index + 'bh-content'}
                                id={'day1_schedule' + index + 'bh-header'}
                            >
                                <div className='flex-col md:flex-row flex justify-center items-center md:space-x-5'>
                                    <div className='flex md:space-x-5 justify-between md:justify-center items-center w-full md:w-auto'>
                                        <span className='text-2xl font-bold'>{data.hour}</span>
                                        <Avatar className='w-10 h-10 md:w-20 md:h-20' alt={data.speaker} src={data.image} />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <h2 className='uppercase font-bold text-xl md:text-2xl'>
                                            {data.title}
                                        </h2>
                                        <span>
                                            por <Link href={data.speakerlink} className="underline">{data.speaker}</Link>
                                        </span>
                                        <span className='text-[#38124A]'>{data.local}</span>
                                    </div>
                                </div>

                            </AccordionSummary>
                            <AccordionDetails className='bg-[#38124A]'>
                                <Typography className='text-white p-5 flex flex-col items-end'>
                                    <span className='text-justify'>{data.description} </span >
                                    <Button href={data.subscription_url} variant="contained" disableElevation className='bt-tickets-invert hover:bg-[#38124A] rounded-3xl py-4 px-7 bg-[#E4E7E5] hover:text-[#F6F6F6] font-bold border-2 border-solid hover:border-[#E4E7E5] text-[#38124A] mt-10 w-min'>
                                        <Stack spacing={1} direction="row">
                                            <span>INSCRIÇÃO</span>
                                            <SvgIcon>
                                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5 0H16.6667V4H12.5V0Z" fill="#38124A" />
                                                    <path d="M16.6667 4H20.8333V8H16.6667V4Z" fill="#38124A" />
                                                    <path d="M16.6667 12H20.8333V16H16.6667V12Z" fill="#38124A" />
                                                    <path d="M12.5 16H16.6667V20H12.5V16Z" fill="#38124A" />
                                                    <path d="M16.6667 8H20.8333V12H16.6667V8Z" fill="#38124A" />
                                                    <path d="M12.5 8H16.6667V12H12.5V8Z" fill="#38124A" />
                                                    <path d="M8.33333 8H12.5V12H8.33333V8Z" fill="#38124A" />
                                                    <path d="M4.16667 8H8.33333V12H4.16667V8Z" fill="#38124A" />
                                                    <path d="M0 8H4.16667V12H0V8Z" fill="#38124A" />
                                                    <path d="M20.8333 8H25V12H20.8333V8Z" fill="#38124A" />
                                                </svg>
                                            </SvgIcon>
                                        </Stack>
                                    </Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
            <div
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-1`}
                aria-labelledby={`simple-tab-1`}>
                <div>
                    {Info.DAY_2_SCHEDULE.map((data, index) => (
                        <Accordion key={index} disableGutters className='bg-transparent my-5 shadow-none mx-5 md:mx-20' expanded={expanded === 'day2_schedule' + index} onChange={handleChangeCalendar('day2_schedule' + index)}>
                            <AccordionSummary className='border-solid border-[#38124A] border-2 rounded-2xl w-full'
                                expandIcon={<SvgIcon><svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 15V20H19.2V15H24Z" fill="#38124A" />
                                    <path d="M19.2 20V25H14.4V20H19.2Z" fill="#38124A" />
                                    <path d="M9.6 20V25H4.8V20H9.6Z" fill="#38124A" />
                                    <path d="M4.8 15V20H0V15H4.8Z" fill="#38124A" />
                                    <path d="M14.4 20V25H9.6V20H14.4Z" fill="#38124A" />
                                    <path d="M14.4 15V20H9.6V15H14.4Z" fill="#38124A" />
                                    <path d="M14.4 10L14.4 15H9.6L9.6 10H14.4Z" fill="#38124A" />
                                    <path d="M14.4 5V10H9.6V5H14.4Z" fill="#38124A" />
                                    <path d="M14.4 0V5H9.6V0L14.4 0Z" fill="#38124A" />
                                    <path d="M14.4 25V30H9.6V25H14.4Z" fill="#38124A" />
                                </svg>
                                </SvgIcon>}
                                aria-controls={'day2_schedule' + index + 'bh-content'}
                                id={'day2_schedule' + index + 'bh-header'}
                            >
                                <div className='flex-col md:flex-row flex justify-center items-center md:space-x-5'>
                                    <div className='flex md:space-x-5 justify-between md:justify-center items-center w-full md:w-auto'>
                                        <span className='text-2xl font-bold'>{data.hour}</span>
                                        <Avatar className='w-10 h-10 md:w-20 md:h-20' alt={data.speaker} src={data.image} />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <h2 className='uppercase font-bold text-xl md:text-2xl'>
                                            {data.title}
                                        </h2>
                                        <span>
                                            por <Link href={data.speakerlink} className="underline">{data.speaker}</Link>
                                        </span>
                                        <span className='text-[#38124A]'>{data.local}</span>
                                    </div>
                                </div>

                            </AccordionSummary>
                            <AccordionDetails className='bg-[#38124A]'>
                                <Typography className='text-white p-5 flex flex-col items-end'>
                                    <span className='text-justify'>{data.description} </span >
                                    <Button href={data.subscription_url} variant="contained" disableElevation className='bt-tickets-invert hover:bg-[#38124A] rounded-3xl py-4 px-7 bg-[#E4E7E5] hover:text-[#F6F6F6] font-bold border-2 border-solid hover:border-[#E4E7E5] text-[#38124A] mt-10 w-min'>
                                        <Stack spacing={1} direction="row">
                                            <span>INSCRIÇÃO</span>
                                            <SvgIcon>
                                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5 0H16.6667V4H12.5V0Z" fill="#38124A" />
                                                    <path d="M16.6667 4H20.8333V8H16.6667V4Z" fill="#38124A" />
                                                    <path d="M16.6667 12H20.8333V16H16.6667V12Z" fill="#38124A" />
                                                    <path d="M12.5 16H16.6667V20H12.5V16Z" fill="#38124A" />
                                                    <path d="M16.6667 8H20.8333V12H16.6667V8Z" fill="#38124A" />
                                                    <path d="M12.5 8H16.6667V12H12.5V8Z" fill="#38124A" />
                                                    <path d="M8.33333 8H12.5V12H8.33333V8Z" fill="#38124A" />
                                                    <path d="M4.16667 8H8.33333V12H4.16667V8Z" fill="#38124A" />
                                                    <path d="M0 8H4.16667V12H0V8Z" fill="#38124A" />
                                                    <path d="M20.8333 8H25V12H20.8333V8Z" fill="#38124A" />
                                                </svg>
                                            </SvgIcon>
                                        </Stack>
                                    </Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
            <div
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-2`}
                aria-labelledby={`simple-tab-2`}>
                <div>
                    {Info.DAY_3_SCHEDULE.map((data, index) => (
                        <Accordion key={index} disableGutters className='bg-transparent my-5 shadow-none mx-5 md:mx-20  ' expanded={expanded === 'day3_schedule' + index} onChange={handleChangeCalendar('day3_schedule' + index)}>
                            <AccordionSummary className='border-solid border-[#38124A] border-2 rounded-2xl w-full'
                                expandIcon={<SvgIcon><svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 15V20H19.2V15H24Z" fill="#38124A" />
                                    <path d="M19.2 20V25H14.4V20H19.2Z" fill="#38124A" />
                                    <path d="M9.6 20V25H4.8V20H9.6Z" fill="#38124A" />
                                    <path d="M4.8 15V20H0V15H4.8Z" fill="#38124A" />
                                    <path d="M14.4 20V25H9.6V20H14.4Z" fill="#38124A" />
                                    <path d="M14.4 15V20H9.6V15H14.4Z" fill="#38124A" />
                                    <path d="M14.4 10L14.4 15H9.6L9.6 10H14.4Z" fill="#38124A" />
                                    <path d="M14.4 5V10H9.6V5H14.4Z" fill="#38124A" />
                                    <path d="M14.4 0V5H9.6V0L14.4 0Z" fill="#38124A" />
                                    <path d="M14.4 25V30H9.6V25H14.4Z" fill="#38124A" />
                                </svg>
                                </SvgIcon>}
                                aria-controls={'day3_schedule' + index + 'bh-content'}
                                id={'day3_schedule' + index + 'bh-header'}
                            >
                                <div className='flex-col md:flex-row flex justify-center items-center md:space-x-5'>
                                    <div className='flex md:space-x-5 justify-between md:justify-center items-center w-full md:w-auto'>
                                        <span className='text-2xl font-bold'>{data.hour}</span>
                                        <Avatar className='w-10 h-10 md:w-20 md:h-20' alt={data.speaker} src={data.image} />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <h2 className='uppercase font-bold text-xl md:text-2xl'>
                                            {data.title}
                                        </h2>
                                        <span>
                                            por <Link href={data.speakerlink} className="underline">{data.speaker}</Link>
                                        </span>
                                        <span className='text-[#38124A]'>{data.local}</span>
                                    </div>
                                </div>

                            </AccordionSummary>
                            <AccordionDetails className='bg-[#38124A]'>
                                <Typography className='text-white p-5 flex flex-col items-end'>
                                    <span className='text-justify'>{data.description} </span >
                                    <Button href={data.subscription_url} variant="contained" disableElevation className='bt-tickets-invert hover:bg-[#38124A] rounded-3xl py-4 px-7 bg-[#E4E7E5] hover:text-[#F6F6F6] font-bold border-2 border-solid hover:border-[#E4E7E5] text-[#38124A] mt-10 w-min'>
                                        <Stack spacing={1} direction="row">
                                            <span>INSCRIÇÃO</span>
                                            <SvgIcon>
                                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5 0H16.6667V4H12.5V0Z" fill="#38124A" />
                                                    <path d="M16.6667 4H20.8333V8H16.6667V4Z" fill="#38124A" />
                                                    <path d="M16.6667 12H20.8333V16H16.6667V12Z" fill="#38124A" />
                                                    <path d="M12.5 16H16.6667V20H12.5V16Z" fill="#38124A" />
                                                    <path d="M16.6667 8H20.8333V12H16.6667V8Z" fill="#38124A" />
                                                    <path d="M12.5 8H16.6667V12H12.5V8Z" fill="#38124A" />
                                                    <path d="M8.33333 8H12.5V12H8.33333V8Z" fill="#38124A" />
                                                    <path d="M4.16667 8H8.33333V12H4.16667V8Z" fill="#38124A" />
                                                    <path d="M0 8H4.16667V12H0V8Z" fill="#38124A" />
                                                    <path d="M20.8333 8H25V12H20.8333V8Z" fill="#38124A" />
                                                </svg>
                                            </SvgIcon>
                                        </Stack>
                                    </Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </Box>
    );
}