import { useState, Fragment, SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Input from '@mui/joy/Input';
import Divider from '@mui/material/Divider';

import Launch from '@mui/icons-material/Launch';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import WebApp from '@twa-dev/sdk';

const Haptic = () => {
    const [open, setOpen] = useState(false);
    const [mainButtonVisible, setMainButtonVisible] = useState(WebApp.MainButton.isVisible);
    const [backButtonVisible, setBackButtonVisible] = useState(WebApp.BackButton.isVisible);
    const [snackbarMessage, setSnackbarMessage] = useState('Default');
    const [btnColor, setBtnColor] = useState(WebApp.themeParams.button_color);
    const [btnTextColor, setBtnTextColor] = useState(WebApp.themeParams.button_text_color);
    const [btnText, setBtnText] = useState(WebApp.MainButton.text);

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

    const handleBtnColorChange = (event: any) => {
        setBtnColor(event.currentTarget.value);
        WebApp.MainButton.setParams({
            color: event.currentTarget.value
        });
    };

    const handleTextChange = (event: any) => {
        setBtnText(event.currentTarget.value)
    };

    const handleBtnTextColorChange = (event: any) => {
        setBtnTextColor(event.currentTarget.value);
        WebApp.MainButton.setParams({
            text_color: event.currentTarget.value
        });
    };

    const handleMainButton= () => {
        if (!WebApp.MainButton.isVisible) {
            WebApp.MainButton.onClick(() => handleClick('Main Button click callback'));
            WebApp.MainButton.setParams({
                text: 'Show Snackbar',
                is_visible: true
            });
            setMainButtonVisible(true);
        }
    };

    const handleBackButton= () => {
        if (!WebApp.BackButton.isVisible) {
            WebApp.BackButton.onClick(() => handleClick('Main Button click callback'));
            WebApp.BackButton.show();
            setBackButtonVisible(true);
        }
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
            <Box>
                <Button
                    onClick={() => WebApp.openLink('https://core.telegram.org/bots/webapps#hapticfeedback')}
                    startDecorator={<Launch fontSize="inherit" />}
                    variant='plain'
                    size='sm'
                    sx={{ mt: .5, ml: -1.5, fontWeight: 400, justifyContent: 'flex-start' }}
                >
                    WebApp.HapticFeedback
                </Button>
            </Box>
            {/*    impactOccurred   */}
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="title-lg" textAlign="left">
                    impactOccurred
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="title-lg" textAlign="left">
                            impactOccurred
                        </Typography>
                    </FormLabel>
                    <ButtonGroup
                        size="sm"
                        color="primary"
                        aria-label="primary button group"
                        sx={{mt: 1}}
                    >
                        <Button
                            onClick={() => WebApp.HapticFeedback.impactOccurred('light')}
                        >
                            light
                        </Button>
                        <Button
                            onClick={() => WebApp.HapticFeedback.impactOccurred('medium')}
                        >
                            medium
                        </Button>
                        <Button
                            onClick={() => WebApp.HapticFeedback.impactOccurred('heavy')}
                        >
                            heavy
                        </Button>
                        <Button
                            onClick={() => WebApp.HapticFeedback.impactOccurred('rigid')}
                        >
                            rigid
                        </Button>
                        <Button
                            onClick={() => WebApp.HapticFeedback.impactOccurred('soft')}
                        >
                            soft
                        </Button>
                    </ButtonGroup>

                </FormControl>
            </Box>

            <Divider role="presentation" sx={{ mt: 2, mb: 1 }} />

            {/*    notificationOccurred   */}
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="title-lg" textAlign="left">
                    notificationOccurred
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="title-lg" textAlign="left">
                            notificationOccurred
                        </Typography>
                    </FormLabel>
                    <ButtonGroup
                        size="sm"
                        color="primary"
                        aria-label="primary button group"
                        sx={{mt: 1}}
                    >
                        <Button
                            onClick={() => WebApp.HapticFeedback.notificationOccurred('error')}
                        >
                            error
                        </Button>
                        <Button
                            onClick={() => WebApp.HapticFeedback.notificationOccurred('success')}
                        >
                            success
                        </Button>
                        <Button
                            onClick={() => WebApp.HapticFeedback.notificationOccurred('warning')}
                        >
                            warning
                        </Button>
                    </ButtonGroup>

                </FormControl>
            </Box>

            <Divider role="presentation" sx={{ mt: 2, mb: 1 }} />

            {/*    selectionChanged   */}
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="title-lg" textAlign="left">
                    selectionChanged
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="title-lg" textAlign="left">
                            selectionChanged
                        </Typography>
                    </FormLabel>
                    <Button
                        onClick={() => WebApp.HapticFeedback.selectionChanged()}
                        sx={{ mt: 1, mb: 1 }}
                        variant="outlined"
                    >
                        selectionChanged()
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

export default Haptic;
