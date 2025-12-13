import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProgramPage.module.css'
import Head from 'next/head'

const artists = [
    {
    name: 'JINGALALA – CHRISTMAS CELEBRATION',
    date: '18/12/2025',
    day: 'Thursday',
    img: '/images/jingalala.jpeg',
    id: 'jingalala',
    content: 'Celebrate the joy of Christmas with rhythm, music, and festive cheer at JINGALALA – the Christmas Celebration presented by Sargodhaya. Featuring energetic performances by Voice of Palakkad and New Voice Palakkad, this musical night blends percussion, harmony, and holiday vibes into a spectacular celebration for first-year students.'
},
{
    name: 'SWAGAT – FRESHERS PARTY',
    date: '27/11/2025',
    day: 'Thursday',
    img: '/images/freshersday2.jpg',
    id: 'swagat',
    content: 'Get ready to welcome the new batch with a night full of energy, rhythm, and celebration at SWAGAT – The Freshers Party presented by Sargodhaya. Featuring electrifying live performances by SA and DJ sets by Aman Olk, this event promises an unforgettable concert-style experience packed with music, lights, and crowd vibes. A perfect beginning to your college journey!'
},
{
    name: 'VICTORY DAY – LIVE BAND SHOW',
    date: '27/10/2025',
    day: 'Monday',
    img: '/images/victoryday.jpeg',
    id: 'victoryday',
    content: 'Aspire College, Thrithala proudly presents Victory Day, a grand live band show by the legendary St. Mary’s Band, Kozhikode. Celebrate pride, unity, and victory through powerful brass music and mesmerizing performances. Join us for an evening filled with tradition, energy, and festive spirit as part of the Students Union 2025–26 celebrations.'
},
{
    name: 'FOAM PARTY',
    date: '23/10/2025',
    day: 'Thursday',
    img: '/images/foamparty.jpeg',
    id: 'foamparty',
    content: 'Turn up the heat and dive into the madness at the ultimate Foam Party organized for first-year students. Featuring explosive DJ sets by DJ Cross and Copzz, this high-energy night promises non-stop music, foam blasts, and a festival-like atmosphere. Get ready to dance, vibe, and create memories that will last a lifetime!'
},
{
    name: 'SARGONAM – ONAM CELEBRATION',
    date: '27/08/2025',
    day: 'Wednesday',
    img: '/images/onam.jpeg',
    id: 'sargonam',
    content: 'Experience the true essence of Kerala’s cultural heritage at SARGONAM – the grand Onam Celebration 2025 presented by Sargodhaya. Featuring the iconic King Mahabali, traditional art forms, and vibrant festive visuals, this celebration brings together joy, unity, and the timeless spirit of Onam in a colorful and majestic atmosphere.'
}

]

const Proshow = function ({ }) {
    return (
        <>
            <Head>
                <title>Hikma union</title>
                <meta name="description" content="Hikma union | Programs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>Programs<br />2025-26</h2>
                </div>

                <div className={styles['cards-container']}>
                    {
                        artists.map((artist, i) => {
                            return (
                                <ProshowPageCard name={artist.name} id={artist.id} key={i} date={artist.date} day={artist.day} content={artist.content} image={artist.img} rev={i % 2 != 0 ? true : false} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Proshow