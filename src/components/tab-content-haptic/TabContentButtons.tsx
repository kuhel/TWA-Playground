import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import Buttons from '../../content/buttons/buttons';

const TabContentButtons = () => {

   return (
      <Box sx={{ width: '100%' }}>
         <Typography level="h1" textAlign="left" sx={{ pb: 2 }}>
            Buttons
         </Typography>
        <Box>
            <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
            <Buttons />
        </Box>
      </Box>
   );
};

export default TabContentButtons;
