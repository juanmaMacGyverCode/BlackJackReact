import * as React from 'react';
import { GreetingsProps } from './types';

export const Greetings:React.FC<GreetingsProps> = ({name, lastName}) => {
    return (
    <h1>Hello world, {name} {lastName}</h1>
    )
};
