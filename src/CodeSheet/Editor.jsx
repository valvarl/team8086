import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/mode/tasm/tasm'
import {Controlled as ControlledEditor} from "react-codemirror2";

export default function Editor({language, value, onChange}) {
    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className='editor-container'>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'eclipse',
                    lineNumbers: true
                }}
            />
        </div>
    )
};