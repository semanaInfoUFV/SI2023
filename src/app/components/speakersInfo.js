import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Accordion, AccordionDetails, AccordionSummary, Avatar, SvgIcon } from '@mui/material';
import Link from 'next/link';

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  const { speakers } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChangeSpeaker = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <span className='underline cursor-pointer' onClick={handleClickOpen}>SOBRE OS AUTORES ➜</span>
      <CustomDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle className='bg-[#DBDEDC]' sx={{ m: 0, pt: 6 }} id="customized-dialog-title">
          <span className='text-3xl md:text-5xl font-bold font-poppins text-center flex w-full justify-center'>
            <span className='text-[#38124A]'>PALESTRANTES</span>
          </span>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <SvgIcon>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H1.42857V1.42857H0V0ZM2.85714 2.85714H1.42857V1.42857H2.85714V2.85714ZM4.28571 4.28571H2.85714V2.85714H4.28571V4.28571ZM5.71429 4.28571H4.28571V5.71429H2.85714V7.14286H1.42857V8.57143H0V10H1.42857V8.57143H2.85714V7.14286H4.28571V5.71429H5.71429V7.14286H7.14286V8.57143H8.57143V10H10V8.57143H8.57143V7.14286H7.14286V5.71429H5.71429V4.28571ZM7.14286 2.85714V4.28571H5.71429V2.85714H7.14286ZM8.57143 1.42857V2.85714H7.14286V1.42857H8.57143ZM8.57143 1.42857V0H10V1.42857H8.57143Z" fill="#38124A" />
            </svg>
          </SvgIcon>
        </IconButton>
        <DialogContent className='bg-[#DBDEDC]'>
          {speakers.map((data, index) => (
            <Accordion key={index} disableGutters className='bg-transparent my-5 shadow-none' expanded={expanded === 'speaker' + index} onChange={handleChangeSpeaker('speaker' + index)}>
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
                aria-controls={'speaker' + index + 'bh-content'}
                id={'speaker' + index + 'bh-header'}
              >
                <div className='flex items-center space-x-5'>
                  <div>
                    <Avatar className='w-10 h-10 md:w-20 md:h-20' alt={data.name} src={data.picture} />
                  </div>
                  <div className='flex flex-col'>
                    <span className='font-bold text-xl uppercase'>{data.name}</span>
                    <span className='text-xs text-[#6E6E6E] uppercase'>{data.role}</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails className='bg-[#38124A]'>
                <Typography className='text-white p-5 flex flex-col items-center'>
                <div dangerouslySetInnerHTML={{ __html: data.htmlDescription }} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </DialogContent>
      </CustomDialog>
    </div>
  );
}
