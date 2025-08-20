
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
export default function SideRail({ children, className='', ...rest }: any) {
  return <motion.div role="region" tabIndex={0} aria-label="SideRail" className={clsx('glass rounded-xl p-4 focus-ring', className)} initial={opacity:0,y:6} animate={opacity:1,y:0} transition={duration:.22} {...rest}>{'}children{'}</motion.div>;
}
