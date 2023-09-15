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

const Buttons = () => {
    const [open, setOpen] = useState(false);
    const [mainButtonVisible, setMainButtonVisible] = useState(false);
    WebApp.MainButton.hide();
    const [backButtonVisible, setBackButtonVisible] = useState(false);
    WebApp.BackButton.hide();
    const [snackbarMessage, setSnackbarMessage] = useState('Default');
    const [btnColor, setBtnColor] = useState(WebApp.themeParams.button_color);
    const [btnTextColor, setBtnTextColor] = useState(WebApp.themeParams.button_text_color);
    // @ts-ignore
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
        console.log('handleMainButton');
        if (!mainButtonVisible) {
            WebApp.MainButton.onClick(() => handleClick('Main Button click callback'));
            WebApp.MainButton.setParams({
                text: 'Show Snackbar',
                is_visible: true
            });
            setMainButtonVisible(true);
        }
    };

    const handleBackButton= () => {
        console.log('handleBackButton');
        // @ts-ignore
        if (!backButtonVisible) {
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

    console.log(WebApp.MainButton);
    console.log(WebApp.BackButton);

    return (
        <Box>
            {/*    Main Button   */}
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="title-lg" textAlign="left">
                    Main Button
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="title-lg" textAlign="left">
                            Main Button
                        </Typography>
                    </FormLabel>
                    <Button
                        onClick={() => WebApp.openLink('https://core.telegram.org/bots/webapps#mainbutton')}
                        startDecorator={<Launch fontSize="inherit" />}
                        variant='plain'
                        size='sm'
                        sx={{ mt: .5, ml: -1.5, fontWeight: 400, justifyContent: 'flex-start' }}
                    >
                        WebApp.MainButton
                    </Button>
                    <FormLabel>Basic methods</FormLabel>
                    <ButtonGroup
                        size="sm"
                        color="primary"
                        aria-label="primary button group"
                        disabled
                    >
                        <Button
                            disabled={mainButtonVisible}
                            variant="solid"
                            onClick={() => handleMainButton()}
                        >
                            Show
                        </Button>
                        <Button
                            disabled={!mainButtonVisible}
                            onClick={() => {
                                WebApp.MainButton.hide();
                                setMainButtonVisible(false);
                            }}
                        >
                            Hide
                        </Button>
                        <Button
                            disabled={!mainButtonVisible}
                            onClick={() => WebApp.MainButton.showProgress()}
                        >
                            Show Progress
                        </Button>
                        <Button
                            disabled={!mainButtonVisible}
                            onClick={() => WebApp.MainButton.hideProgress()}
                        >
                            Hide Progress
                        </Button>
                        <Button
                            disabled={!mainButtonVisible}
                            onClick={() => WebApp.MainButton.enable()}
                        >
                            Enable
                        </Button>
                        <Button
                            disabled={!mainButtonVisible}
                            onClick={() => WebApp.MainButton.disable()}
                        >
                            Disable
                        </Button>
                    </ButtonGroup>

                    <FormLabel>Background color</FormLabel>
                    <input type="color" id="btn_color" name="btn_color" value={btnColor} onChange={handleBtnColorChange}/>
                    <FormLabel sx={{ mt: 1 }}>Text color</FormLabel>
                    <input type="color" id="btn_text_color" name="btn_text_color" value={btnTextColor} onChange={handleBtnTextColorChange}/>
                    <FormLabel sx={{ mt: 1 }}>Main Button text</FormLabel>

                    <Input
                        placeholder={btnText}
                        onChange={handleTextChange}
                        endDecorator={<Button
                            onClick={() => WebApp.MainButton.setText(btnText)}
                        >
                            Set Text
                        </Button>}
                    />

                </FormControl>
            </Box>

            <Divider role="presentation" sx={{ mt: 4, mb: 1 }} />

            {/*    Back Button   */}
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography level="title-lg" textAlign="left">
                    Back Button
                </Typography>
            </FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel sx={{ display: { sm: 'none' } }}>
                        <Typography level="title-lg" textAlign="left">
                            Back Button
                        </Typography>
                    </FormLabel>
                    <Button
                        onClick={() => WebApp.openLink('https://core.telegram.org/bots/webapps#backbutton')}
                        startDecorator={<Launch fontSize="inherit" />}
                        variant='plain'
                        size='sm'
                        sx={{ mt: .5, ml: -1.5, fontWeight: 400, justifyContent: 'flex-start' }}
                    >
                        WebApp.BackButton
                    </Button>

                    <ButtonGroup
                        buttonFlex={1}
                        sx={{ width: '240px', justifyContent: 'center', mt: 1.5 }}
                        size="sm"
                        color="primary"
                        aria-label="primary button group"
                        disabled
                    >
                        <Button
                            disabled={backButtonVisible}
                            variant="solid"
                            onClick={() => handleBackButton()}
                        >
                            Show
                        </Button>
                        <Button
                            disabled={!backButtonVisible}
                            onClick={() => {
                                WebApp.BackButton.hide();
                                setBackButtonVisible(false);
                            }}
                        >
                            Hide
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

export default Buttons;
