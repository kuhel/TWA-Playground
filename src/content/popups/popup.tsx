import { useState, Fragment, SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Divider from '@mui/material/Divider';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import WebApp from '@twa-dev/sdk';
import Launch from "@mui/icons-material/Launch";

const Popup = () => {
    const [open, setOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('Default');

    const handleClick = (message: string) => {
        setSnackbarMessage(message);
        setOpen(true);
    };

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <Box>
            <Box sx={{display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <Button
                    onClick={() => WebApp.openLink('https://core.telegram.org/bots/webapps#initializing-mini-apps')}
                    startDecorator={<Launch fontSize="inherit" />}
                    variant='plain'
                    size='sm'
                    sx={{ mt: .5, ml: -1.5, fontWeight: 400, justifyContent: 'flex-start' }}
                >
                    showPopup, showAlert, showConfirm, showScanQrPopup
                </Button>
                <FormControl sx={{ flex: 1 }}>
                    <ButtonGroup
                        size="sm"
                        color="primary"
                        aria-label="primary button group"
                        sx={{mt: 2}}
                    >
                        <Button
                            onClick={() => {
                                WebApp.showPopup({
                                    title: 'Popup title',
                                    message: 'Popup message',
                                    buttons: [
                                        {id: 'doc', type: 'default', text: 'Open documentation'},
                                        {type: 'ok'},
                                        {id: 'destructive', type: 'destructive', text: 'Destructive button'},
                                    ]
                                }, (buttonId) => {
                                    switch (buttonId) {
                                        case 'destructive': {
                                            handleClick('Destructive button was clicked');
                                            break;
                                        }
                                        case 'doc': {
                                            WebApp.openLink('https://core.telegram.org/bots/webapps#popupparams');
                                            break;
                                        }
                                        default: {
                                            handleClick('Default callback');
                                        }
                                    }
                                })}
                            }
                        >
                            Launch Popup
                        </Button>
                        <Button
                            onClick={() => {
                                WebApp.showAlert('This is Telegram alert popup.', () => handleClick('WebApp.showAlert() callback'))}
                            }
                        >
                            Launch Alert
                        </Button>
                        <Button
                            onClick={() => {
                                WebApp.showConfirm('This is Telegram confirm popup.', () => handleClick('WebApp.showConfirm() callback'))}
                            }
                        >
                            Launch Confirm
                        </Button>
                        <Button
                            onClick={() => {
                                WebApp.showScanQrPopup({text: 'Custom text goes here'}, (text) => handleClick(text ? text : 'WebApp.showScanQrPopup() callback'))}
                            }
                        >
                            Launch Scan QR
                        </Button>
                    </ButtonGroup>

                </FormControl>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={snackbarMessage}
                action={action}
            />
        </Box>
    );
};

export default Popup;
