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
                    <p>Outside of CS, I am hugely passionate about music! I was part of <a href="https://stanfordotone.com">O-Tone</a>, Stanford's East Asian A Cappella group, for a few years in my undergrad. I have my own YouTube channel where I post song covers (mainly of K-Pop),
                        and I enjoy producing my own music using Logic Pro and some fun electronic instruments. I've also taken MUSIC 123E: Electronic Music Composition, where I produced, composed, and recorded vocals for
                        my own EP album. Though piano was my first instrument, I also like to experiment around on a guitar or ukulele whenever I get a chance.</p>
                    <p>Above are some of the songs composed and produced by me!</p>
                </section>
            </main>
            <footer>
                <p>Copyright © {new Date().getFullYear()} Jingwen Wu. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Music;