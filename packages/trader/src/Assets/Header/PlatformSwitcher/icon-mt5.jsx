import classNames from 'classnames';
import PropTypes  from 'prop-types';
import React      from 'react';

const IconMT5 = ({ className }) => (
    <svg className={classNames('inline-icon', className)} width='32' height='32' viewBox='0 0 32 32'>
        <g fill='none' fillRule='evenodd'>
            <rect width='32' height='32' fill='#85ACB0' fillRule='nonzero' rx='6' />
            <path fill='#FFF' fillRule='nonzero' d='M18.575 10.745l-2.28-4.565a.33.33 0 0 0-.59 0l-2.265 4.53L16 15.88l2.575-5.135zM12.885 14.03l1.47 2.97-.22.43-1 2H10.19l1.59-3.175 1.105-2.21v-.015zm0-2.2l-2 4-2.305 4.61h5.15L15 17.855l.455-.855-2.565-5.185-.005.015zM18.745 21.39l2.29 4.61h4.635a.33.33 0 0 0 .295-.5L23.9 21.39h-5.155zM19.125 14.055l1.095 2.185 1.59 3.175h-2.94L17.66 17l1.465-2.935v-.01zm0-2.195L16.56 17l1.695 3.42h5.15L21.1 15.795l-2-3.945.025.01zM13.255 21.39H8.1l-2.065 4.135a.33.33 0 0 0 .295.5h4.62l2.305-4.635zM17.03 22.38L18.34 25h-4.69l1.32-2.635h2.06v.015zm.615-1.015H14.36L12.055 26h7.88l-2.29-4.61v-.025z' />
            <path d='M0 0h32v32H0z' />
            <path d='M0 0h32v32H0z' />
        </g>
    </svg>
);

IconMT5.propTypes = {
    className: PropTypes.string,
};

export default IconMT5;
