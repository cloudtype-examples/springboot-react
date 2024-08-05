import React from 'react';
import reactLogo from './images/react.svg';
import springBootLogo from './images/spring-boot.svg';

function App() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={reactLogo} className="w-36 rounded-lg md:ml-5 lg:ml-5" alt="react"/>
                <img src={springBootLogo} className="w-36 rounded-lg md:ml-5 lg:ml-5" alt="spring-boot"/>
                <div>
                    <h1 className="text-5xl font-bold">Spring Boot ➕ React</h1>
                    <p className="py-6">클라우드타입에서 배포한 Spring Boot + React 어플리케이션입니다.</p>
                    <div
                        className="space-x-2">
                        <button type="button"
                                onClick={() => window.open('https://github.com/cloudtype-examples/springboot-react')}
                                className="btn btn-outline rounded">
                            GitHub
                        </button>
                        <button type="button" onClick={() => window.open('https://docs.cloudtype.io/')}
                                className="btn btn-outline rounded">
                            Docs
                        </button>
                        <button type="button" onClick={() => window.open('https://discord.gg/U7HX4BA6hu')}
                                className="btn btn-outline rounded">
                            Discord
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;