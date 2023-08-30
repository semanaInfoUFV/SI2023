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

export default function Doubts() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChangeCalendar = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div>
            {Info.COMMON_QUESTIONS.map((data, index) => (
                <Accordion key={index} className='bg-transparent my-5 shadow-none mx-5 md:mx-20  ' disableGutters expanded={expanded === 'question' + index} onChange={handleChangeCalendar('question' + index)}>
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
                        aria-controls={'question' + index + "bh-content"}
                        id= {'question' + index + "bh-header"}
                    >
                        <h2 className='uppercase font-bold text-xl  md:text-2xl'>
                            {data.question}
                        </h2>
                    </AccordionSummary>
                    <AccordionDetails className='bg-[#38124A]'>
                        <Typography className='text-white p-2 md:p-5 flex flex-col items-end'>
                        <div className='text-justify' dangerouslySetInnerHTML={{ __html: data.response}} />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}