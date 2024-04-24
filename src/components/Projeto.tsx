// Projeto.tsx
'use client'
import { useState, useEffect } from "react";

export default function Projeto() {
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0, seconds: 0 });

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                clearInterval(intervalId);
            } else {
                setTimeLeft(prevTime => {
                    let hours = prevTime.hours;
                    let minutes = prevTime.minutes;
                    let seconds = prevTime.seconds;

                    if (seconds === 0) {
                        if (minutes === 0) {
                            hours = hours === 0 ? 12 : hours - 1;
                            minutes = 59;
                        } else {
                            minutes -= 1;
                        }
                        seconds = 59;
                    } else {
                        seconds -= 1;
                    }

                    return { hours, minutes, seconds };
                });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    return (
        <div id="projeto" className="block min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg3.webp')" }}>
            <div className="text-center text-white mb-4">
                <p className="bg-pink-700 mx-16 lg:mx-40 rounded-full mb-4">Projetos</p>
                <h1 className="text-lg md:text-4xl">O serviço será atualizado em:</h1>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-8 lg:px-16 mb-6 lg:mb-16">
                <div className="text-center text-white mb-4">
                    <p className="text-sm text-gray-600 font-bold mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ea magni temporibus nostrum laborum hic numquam? Excepturi earum dolor ut maxime sequi eveniet accusantium ad vel! Corrupti reiciendis ut assumenda!</p>
                </div>
            </div>
            <div className="text-purple-custom w-full lg:w-1/2">
                <div className="flex justify-center">
                    <span className="number-background px-4 lg:px-6 rounded-xl">{formatTime(timeLeft.hours)[0]}</span>
                    <span className="number-background px-4 lg:px-6 rounded-xl">{formatTime(timeLeft.hours)[1]}</span>
                    <span className="time-separator">:</span>
                    <span className="number-background px-4 lg:px-6 rounded-xl">{formatTime(timeLeft.minutes)[0]}</span>
                    <span className="number-background px-4 lg:px-6 rounded-xl">{formatTime(timeLeft.minutes)[1]}</span>
                    <span className="time-separator">:</span>
                    <span className="number-background px-4 lg:px-6 rounded-xl">{formatTime(timeLeft.seconds)[0]}</span>
                    <span className="number-background px-4 lg:px-6 rounded-xl">{formatTime(timeLeft.seconds)[1]}</span>
                </div>
            </div>

            <style jsx>{`
                .number-background {
                    background-color: #1C242F;
                    margin: 0 0.25rem;
                    font-size: 5vw;
                }
                .time-separator {
                    font-size: 5vw; 
                    line-height: 0.8;
                    margin-top: 0.3em;
                }

                @media (min-width: 640px) {
                    .number-background {
                        font-size: 4vw;
                    }
                    .time-separator {
                        font-size: 4vw; 
                    }
                }
            `}</style>
        </div>
    );
}
