import React from 'react';

interface Props {
    title: string
}

const Label = (props: Props) => <span>{props.title}</span>

export default Label