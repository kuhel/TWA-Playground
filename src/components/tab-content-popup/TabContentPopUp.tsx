import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import Popup from '../../content/popups/popup';

const TabContentPopup = () => {

   return (
      <Box sx={{ width: '100%' }}>
         <Typography level="h1" textAlign="left" sx={{ pb: 2 }}>
            Popups
         </Typography>
        <Box>
            <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
            <Popup />
        </Box>
      </Box>
   );
};

export default TabContentPopup;
