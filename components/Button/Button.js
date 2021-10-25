import { useButton } from '@react-aria/button';
import Icon from '../Icon/Icon';
import { useRef } from 'react';

const Button = (props) => {
  const {
    ghost,
    text = 'Click',
    link = '#',
    icon,
    full,
    children,
    target,
  } = props;
  const isGhost = ghost ? 'c-buttoncta--ghost' : '';
  const isFull = full ? 'c-buttoncta--full' : '';

  const ref = useRef();
  const { linkButtons } = useButton(props, ref);

  return (
    <a
      {...linkButtons}
      ref={ref}
      className={`c-buttoncta ${isFull} ${isGhost}`}
      target={`_${target}`}
      href={link}
    >
      {icon && <Icon icon={icon} />}
      {children}
      {text}
    </a>
  );
};
export default Button;
