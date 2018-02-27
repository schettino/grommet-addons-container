import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-web';
import {Box} from 'grommet';
import * as _animationData from 'default-animation';

class Busy extends React.PureComponent {
  componentDidMount() {
    const {autoplay, loop, animationData} = this.props;
    this.animation = Lottie.loadAnimation({
      loop,
      autoplay,
      animationData: animationData || _animationData,
      renderer: 'svg',
      container: this.wrapper,
    });
  }

  render() {
    const {autoplay, loop, ...rest} = this.props;

    let height = '100%';
    if (rest && rest.style && rest.style.maxHeight) {
      height = rest.style.maxHeight;
    }

    return (
      <Box
        elevation="small"
        basis="xsmall"
        pad="xsmall"
        round="full"
        animation={{type: 'slideUp', duration: 200}}
        background={{color: 'brand', opacity: 'weak'}}
        {...rest}>
        <div
          style={{height}}
          ref={wrapper => {
            this.wrapper = wrapper;
          }}
        />
      </Box>
    );
  }
}

Busy.defaultProps = {
  autoplay: true,
  loop: true,
};

Busy.propTypes = {
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  animationData: PropTypes.object,
};

export default Busy;
