import Box from '@mui/joy/Box';
import Skeleton from '@mui/material/Skeleton';
import Divider from "@mui/material/Divider";

const PageLoading = () => {
   return <Box>
       <Skeleton variant="rounded" height={50} sx={{mb: 1}} />
       <Divider role="presentation" sx={{ mb: 1 }} />
       <Skeleton variant="rounded" height={60} sx={{mt: 1}} />
       <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
       <Skeleton variant="rounded" height={320} sx={{mt: 1}} />
   </Box>;
};

export default PageLoading;
