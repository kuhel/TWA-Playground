import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import Button from '@mui/joy/Button';

import WebApp from '@twa-dev/sdk';
const Popup = () => {
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
                                {type: 'cancel'},
                                {type: 'close'},
                                {type: 'ok'},
                                {id: 'destructive', type: 'destructive', text: 'Destructive button'},
                            ]
                        }, (buttonId) => {
                            switch (buttonId) {
                                case 'destructive': {
                                    WebApp.showAlert("Destructive button was clicked");
                                    break;
                                }
                                case 'doc': {
                                    WebApp.openLink('https://core.telegram.org/bots/webapps#popupparams');
                                    break;
                                }
                                default: {
                                    WebApp.showAlert("Nothing happened");
                                }
                            }
                        })}
                    }
                >
                    Launch Popup
                </Button>
            </FormControl>
        </Box>
    </Box>
    );
};

export default Popup;
