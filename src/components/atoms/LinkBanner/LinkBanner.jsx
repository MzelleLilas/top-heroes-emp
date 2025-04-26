import Image from '../Image/Image';
import ThCorner from '../Image/ThCorner';
import './LinkBanner.css';

export default function LinkBanner({children, src}) {
    return (
        <a href={src} class="link-banner relative w-full flex justify-center items-center gap-4 p-6 px-8">
            <span class="font-semibold text-tp-primary-100">
                {children}
            </span>
            <Image src="top-heroes/arrow-right.png" alt="" width="34px" height="34px" className="-mb-1" />

            <div class="tp-corners absolute inset-0 flex justify-center items-center pointer-events-none" aria-hidden="true">
                <ThCorner x="right" y="top" />
                <ThCorner x="left" y="bottom" />
                <ThCorner x="left" y="top" />
                <ThCorner x="right" y="bottom" />
            </div>
        </a>
    );
}