
import * as React from 'react';


const Experience: React.FC = () => {
    return (
        <section id="experience" className="p-10 ">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <section className="timeline-area " style={{
                borderLeft: "1px solid #1e293b",
                paddingLeft: "15px"
            }}>

                <div className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
                     style={{position: 'relative'}}><span
                    style={{
                        content: "''", // content equivalent in inline style (though not functional, kept for clarity)
                        display: 'block',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#0F172A',
                        position: 'absolute',
                        top: '70px',
                        left: '-23px', // Adjust as needed
                        border: '2px solid #1e293b',

                    }}
                />
                    <div className="flex  flex-col p-8 bg-[#1e293b] rounded-lg   ">

                        <div className="text-2xl font-bold  pb-6 ">SOFTWARE ENGINEERING</div>
                        <div className="text-lg text-[#374151]">
                            Backend Java developer at Teletic.
                        </div>
                        <h2 className="text-[#374151]">2023 Nov - Present</h2>
                    </div>
                </div>

                <div className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
                     style={{position: 'relative'}}><span
                    style={{
                        content: "''", // content equivalent in inline style (though not functional, kept for clarity)
                        display: 'block',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#0F172A',
                        position: 'absolute',
                        top: '70px',
                        left: '-23px', // Adjust as needed
                        border: '2px solid #1e293b',
                    }}
                />
                    <div className="flex  flex-col p-8 bg-[#1e293b] rounded-lg   ">
                        <div className="text-2xl font-bold text-[#374151] pb-6">FREELANCER</div>
                        <div className="text-lg text-[#374151]">
                            Java FX/Swing developer.
                        </div>
                        <h2 className="text-[#374151]">2021  - 2024</h2>
                    </div>
                </div>
                <div className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
                     style={{position: 'relative'}}><span
                    style={{
                        content: "''", // content equivalent in inline style (though not functional, kept for clarity)
                        display: 'block',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#0F172A',
                        position: 'absolute',
                        top: '70px',
                        left: '-23px', // Adjust as needed
                        border: '2px solid #1e293b',

                    }}
                />
                    <div className="flex  flex-col p-8 bg-[#1e293b] rounded-lg   ">
                        <div className="text-2xl font-bold text-[#374151] pb-6">Generator</div>
                        <div className="text-lg text-[#374151]">
                            Leverage a graphical editor to create beautiful web components.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
                     style={{position: 'relative'}}><span
                    style={{
                        content: "''", // content equivalent in inline style (though not functional, kept for clarity)
                        display: 'block',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#0F172A',
                        position: 'absolute',
                        top: '70px',
                        left: '-23px', // Adjust as needed
                        border: '2px solid #1e293b',

                    }}
                />
                    <div className="flex  flex-col p-8 bg-[#1e293b] rounded-lg   ">
                        <div className="text-2xl font-bold text-[#374151] pb-6">Generator</div>
                        <div className="text-lg text-[#374151]">
                            Leverage a graphical editor to create beautiful web components.
                        </div>
                    </div>
                </div>
            </section>

        </section>

    );
};

export default Experience;


