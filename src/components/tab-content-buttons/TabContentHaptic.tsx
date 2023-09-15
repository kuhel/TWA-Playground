import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import Haptic from '../../content/haptic/haptic';

const TabContentHaptic = () => {

   return (
      <Box sx={{ width: '100%' }}>
         <Typography level="h1" textAlign="left" sx={{ pb: 2 }}>
             Haptic Feedback
         </Typography>
        <Box>
            <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
            <Haptic />
        </Box>
      </Box>
   );
};

export default TabContentHaptic;
