import ReactPlayer from 'react-player';
import Navbar from './Navbar';


function Music() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Jingwen Wu</h1>
            </header>
            <main>
                <Navbar />
                <section>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                        <ReactPlayer style={{ marginRight: '5%' }}
                            url="https://soundcloud.com/prodjingwen/stay-in-love?si=89ff8911f9484f91b710762f575d3d23&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width='30%' height='10%' config={{
                                soundcloud: {
                                    options: {
                                        sharing: true
                                    }
                                }
                            }} />
                        <ReactPlayer style={{ marginRight: '5%' }}
                            url="https://soundcloud.com/prodjingwen/winter?si=e41654687d354b358292ebee424dac82&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                            width='30%' height='10%' config={{
                                soundcloud: {
                                    options: {
                                        sharing: true
                                    }
                                }
                            }} />
                        <ReactPlayer
                            url="https://soundcloud.com/prodjingwen/dice?si=e7d16acd598c454999123a16860615ec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                            width='30%' height='10%' config={{
                                soundcloud: {
                                    options: {
                                        sharing: true
                                    }
                                }
                            }} />
                    </div>
                    <p>If there's anything to know about me... I am hugely passionate about music. It's been a part of my life since I can remember, after taking lessons in piano, guitar, and voice throughout my childhood and teenage years. Becoming
                        a professional singer has always been a dream of mine. Maybe it's a little futile now, but I still want to put my creations out there into the universe, so here we are! Self-fulfillment, or something like that...</p>
                 <p>I sang Soprano for <a href="https://stanfordotone.com">O-Tone</a>, Stanford's East Asian A Cappella group, for a few years in my undergrad (although I'm more of a Mezzo). I also have my own YouTube channel where I post song covers (mainly of K-Pop).
                    </p>
                     <p>I enjoy producing my own music, mainly using Logic Pro and some fun electronic instruments. More formally, I've also taken MUSIC 123E: Electronic Music Composition, where I produced, composed, and recorded vocals for
                        my own EP album. </p>
                    <p>Above are some of my songs!</p>
                </section>
            </main>
            <footer>
                <p>Copyright © {new Date().getFullYear()} Jingwen Wu. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Music;