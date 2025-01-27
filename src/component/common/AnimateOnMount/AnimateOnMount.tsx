import { useEffect, useState, useRef, FC } from 'react';
import ConditionallyRender from '../ConditionallyRender';

interface IAnimateOnMountProps {
    mounted: boolean;
    enter: string;
    start: string;
    leave: string;
    container?: string;
}

const AnimateOnMount: FC<IAnimateOnMountProps> = ({
    mounted,
    enter,
    start,
    leave,
    container,
    children,
}) => {
    const [show, setShow] = useState(mounted);
    const [styles, setStyles] = useState('');
    const mountedRef = useRef<null | boolean>(null);

    useEffect(() => {
        if (mountedRef.current !== mounted || mountedRef === null) {
            if (mounted) {
                setShow(true);
                setTimeout(() => {
                    setStyles(enter);
                }, 50);
            } else {
                setStyles(leave);
            }
        }
    }, [mounted, enter, leave]);

    const onTransitionEnd = () => {
        if (!mounted) {
            setShow(false);
        }
    };

    return (
        <ConditionallyRender
            condition={show}
            show={
                <div
                    className={`${start} ${styles} ${
                        container ? container : ''
                    }`}
                    onTransitionEnd={onTransitionEnd}
                >
                    {children}
                </div>
            }
        />
    );
};

export default AnimateOnMount;
