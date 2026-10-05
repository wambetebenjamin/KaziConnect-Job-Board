'use client';
import { useEffect, useState } from 'react';
export function LoadingScreen() {
  const [shown, setShown] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setShown(false), 360); return () => window.clearTimeout(timer); }, []);
  return <div id="ftco-loader" className={`show fullscreen kazi-loader ${shown ? '' : 'loader-hidden'}`} aria-hidden={!shown}>
    <svg className="circular" width="48" height="48" viewBox="0 0 48 48"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/></svg>
  </div>;
}
