export default function Image({ src, alt, className, width, height, decorative = false, lazy = true }) {
    return (
        <img src={'../' + src}
             alt={alt}
             className={className}
             width={width}
             height={height}
             aria-hidden={decorative}
             lazy-loading={lazy}
        />
    );
}