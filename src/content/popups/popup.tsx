import { useState, Fragment, SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/joy/Button';
import Divider from '@mui/material/Divider';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import WebApp from '@twa-dev/sdk';

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
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="h4" textAlign="left">
                    Show Popup
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="h4" textAlign="left">
                            Show Popup
                        </Typography>
                    </FormLabel>
                    <Button
                        variant="solid"
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

                </FormControl>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            {/*    Alert   */}
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="h4" textAlign="left">
                    Show Alert
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="h4" textAlign="left">
                            Show Alert
                        </Typography>
                    </FormLabel>
                    <Button
                        variant="solid"
                        onClick={() => {
                            WebApp.showAlert('This is Telegram alert popup.', () => handleClick('WebApp.showAlert() callback'))}
                        }
                    >
                        Launch Alert
                    </Button>
                </FormControl>
            </Box>
            {/*    Confirm   */}
            <Divider sx={{ mt: 2, mb: 2 }} />
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="h4" textAlign="left">
                    Show Confirm
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="h4" textAlign="left">
                            Show Confirm
                        </Typography>
                    </FormLabel>
                    <Button
                        variant="solid"
                        onClick={() => {
                            WebApp.showConfirm('This is Telegram confirm popup.', () => handleClick('WebApp.showConfirm() callback'))}
                        }
                    >
                        Launch Alert
                    </Button>
                </FormControl>
            </Box>

            {/*    QR   */}
            <Divider sx={{ mt: 2, mb: 2 }} />
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="h4" textAlign="left">
                    Show Scan QR Popup
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="h4" textAlign="left">
                            Show Scan QR Popup
                        </Typography>
                    </FormLabel>
                    <Button
                        variant="solid"
                        onClick={() => {
                            WebApp.showScanQrPopup({text: 'Custom text goes here'}, (text) => handleClick(text ? text : 'WebApp.showScanQrPopup() callback'))}
                        }
                    >
                        Launch Scan QR
                    </Button>
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
