'use client'
import React from "react";

type DivProps = React.HTMLProps<HTMLDivElement>

const Cell = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
    <div ref={ref} className="timeline-cell" />
))


Cell.displayName = 'Cell';
export default Cell;
