import clsx from 'clsx';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function Logo({
    className,
}) {
    return (
        <div className='w-full'>
            <Link href='/'>
                <ImageWithFallback
                    alt='Bridge Note'
                    src={'/images/bridgenote-logo.svg'}
                    className={clsx('cursor-pointer object-contain h-full w-full', className)}
                />
            </Link>
        </div>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
};