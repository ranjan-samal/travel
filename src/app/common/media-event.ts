export enum MediaBreakpointType {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl'
}

export interface MediaBreakpointEvent {
    type: MediaBreakpointType;
    payload: any;
}