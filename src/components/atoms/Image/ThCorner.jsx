import Image from './Image';
import classNames from 'classnames';
import './ThCorner.css';

export default function ThCorner({ x = 'right', y = 'top' }) {
    const classes = classNames('tp-corner', `tp-corner--${x}`, `tp-corner--${y}`);

    return (
        <Image src="top-heroes/top-heroes-corner.svg"
               alt=""
               width="34px"
               height="34px"
               decorative
               className={classes}
        />
    );
}