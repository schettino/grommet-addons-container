import React from 'react';
import {Stack, Box} from 'grommet';
import PropTypes from 'prop-types';
import Busy from './Busy';

const Container = ({busy, basic, spinner, ...props}) => (
  <Stack guidingChild="first">
    <Box
      style={{minHeight: 130}}
      margin="small"
      justify="center"
      direction="row"
      responsive>
      <Box
        elevation={basic ? undefined : 'xsmall'}
        round="xsmall"
        pad="medium"
        basis="1/2"
        gap="xsmall"
        {...props}
      />
    </Box>
    {busy && (
      <Box
        animation={{type: 'fadeIn', duration: 500}}
        justify="center"
        align="center"
        direction="row"
        background={{opacity: 'weak', color: 'white'}}>
        {spinner ? spinner : <Busy />}
      </Box>
    )}
  </Stack>
);

Container.defaultProps = {
  basic: false,
  busy: false,
};

Container.propTypes = {
  basic: PropTypes.bool,
  busy: PropTypes.bool,
  spinner: PropTypes.node,
};

export default Container;
