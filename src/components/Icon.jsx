/* Compact, consistent, dependency-free stroke icons. */
const paths={
 coffee:<><path d="M5 6h14v9a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V6ZM19 8h1a3 3 0 0 1 0 6h-1M8 2v2M13 2v2"/></>,
 globe:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-2.5 2.7-3.5 5.7-3.5 9s1 6.3 3.5 9M12 3c2.5 2.7 3.5 5.7 3.5 9s-1 6.3-3.5 9"/></>,
 ship:<><path d="m2 17 10 4 10-4-3-9H5l-3 9ZM12 3v15M8 5h8"/><path d="M3 22c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0"/></>
};
export default function Icon({name="coffee",size=23}){return <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[name]||paths.coffee}</svg>}
