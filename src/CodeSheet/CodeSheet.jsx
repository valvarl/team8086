import React from 'react';
import './CodeSheet.css';

const CodeSheet = () => {
    return (
        <section className='contentColumn scrollable-container'>
            <div className='scroll-mask' style={{backgroundColor: "rgb(248, 248, 248)"}}/>
            <div className='stretcher scrollable leftDrawerCollapsed'>
                <main className='page-content'>
                    <div className='jss4'>
                        <div className='sheet-wrapper'>
                            <div className='content-sheet'>
                                <div className='code-sheet'>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default CodeSheet;