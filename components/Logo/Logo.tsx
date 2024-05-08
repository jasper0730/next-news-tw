"use client"
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <div className="text-3xl font-bold px-8 py-4 inline-flex	">NEWS</div>
}

export default Logo