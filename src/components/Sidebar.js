import * as React from 'react';
// import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useCommonContext } from './CommonContext';
import { IconButton } from '@mui/material';

function Sidebar() {
  // const { title, description, archives, social } = props;

  const { commonState } = useCommonContext();

  // console.log(commonState.sidebar.social);

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {commonState.sidebar.title}
        </Typography>
        <Typography>{commonState.sidebar.description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {commonState.sidebar.archives.map((archive) => (
        <Link display="block" variant="body1" key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {commonState.sidebar.social.map((network) => (
        <Link
          display="block"
          variant="body1"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
          <IconButton>
          {/* {network.icon} */}
          </IconButton>
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

// Sidebar.propTypes = {
//   archives: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   description: PropTypes.string.isRequired,
//   social: PropTypes.arrayOf(
//     PropTypes.shape({
//       icon: PropTypes.elementType,
//       name: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Sidebar;
