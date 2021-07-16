import React, {useState} from 'react';
import './CodeSheet.css'
import Editor from "./Editor";

const Sheet = () => {
    const [code, setCode] = useState('.model small\n' +
        '.stack 100h\n' +
        '.data\n' +
        '\n' +
        'TimePromt\t\t\t\tDB \'Is it after 12 noon (Y/N)?$\'\n' +
        'GoodMorningMessage\t\tDB 13, 10, \'Good morning, world!\', 13, 10, \'$\'\n' +
        'GoodAfterNoonMessage\tDB 13, 10, \'Good afternoon, world!\', 13, 10, \'$\'\n' +
        'DefaultMessage \t\t\tDB 13, 10, \'Good day, world!\', 10, 13, \'$\'\n' +
        '\n' +
        '.code\n' +
        'start:\n' +
        '\tmov ax, @data\n' +
        '\tmov ds, ax\t\t\t\t\t;set DS to point to the data segment\n' +
        '\tmov dx, offset TimePromt\t;point to the time promt\n' +
        '\tmov ah, 9\t\t\t\t\t;DOS: print string\n' +
        '\tint 21h\t\t\t\t\t\t;display the time promt\n' +
        '\tmov ah, 1\t\t\t\t\t;DOS: get the character\n' +
        '\tint 21h\t\t\t\t\t\t;get a single-character response\n' +
        '\tor al, 20h\t\t\t\t\t;force character to lower case\n' +
        '\t\n' +
        '\tcmp al, \'y\'\t\t\t\t\t;typed Y for afternoon?\n' +
        '\tje IsAfternoon\n' +
        '\tcmp al, \'n\'\t\t\t\t\t;typed N for morning?\n' +
        '\tje IsMorning\n' +
        '\t\n' +
        '\tmov dx, offset DefaultMessage\t\t\t;default greeting\n' +
        '\tjmp DisplayGreeting\n' +
        '\t\n' +
        'IsAfternoon:\n' +
        '\tmov dx, offset DefaultMessage\t\t\t;afternoon greeting\n' +
        '\tjmp DisplayGreeting\n' +
        '\n' +
        'IsMorning:\n' +
        '\tmov dx, offset GoodMorningMessage\t\t;before noon greeting\n' +
        '\t\n' +
        'DisplayGreeting:\n' +
        '\tmov ah, 9\t\t\t\t\t;DOS: print string\n' +
        '\tint 21h\t\t\t\t\t\t;display appropriate greeting\n' +
        '\tmov ah, 4ch\t\t\t\t\t;DOS: terminate program\n' +
        '\tmov al, 0\t\t\t\t\t;return code will be 0\n' +
        '\tint 21h\t\t\t\t\t\t;terminate the program\n' +
        '\t\n' +
        'end start')

    return (
        <div className='code-sheet'>
            <div className='code-sheet-header' />
            <section className='code-window'>
                <Editor language='tasm' value={code} onChange={setCode}/>
            </section>
        </div>
    );
};

export default Sheet;