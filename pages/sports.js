import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/SportsPage.module.css'
import Head from 'next/head'

const artists = [
    {
        name: 'Volleyball',
        // date: '16 December',
        // day: 'Monday',
        img: '/images/volleyball.jpeg',
        id: "dabzee",
        content: 'Aspire College Volleyball Team stands united with skill, discipline, and passion. Through hard training and teamwork, they rise on every court, representing the college with pride, sportsmanship, and an unbreakable fighting spirit.!'
    },
    {
        name: 'Cricket',
        // date: '16 December',
        // day: 'Monday',
        img: '/images/cricket.jpeg',
        id: "dabzee",
        content: 'Aspire College Cricket Team plays with strategy, discipline, and determination, while the Football Team shines with speed, skill, and unity. Together they represent the college with pride, teamwork, and an unbreakable fighting spirit.'
    },
    {
        name: 'Football',
        // date: '16 December',
        // day: 'Monday',
        img: '/images/football.jpeg',
        id: "dabzee",
        content: 'Aspire College Football Team plays with speed, skill, and unity. Driven by passion and teamwork, they fight for every goal, inspire supporters, and proudly represent the college spirit on every match day. Together we play to win now'
    },
  

]

export default function Prodezza({ }) {
    return (
        <>
            <Head>
                <title>Hikma Sports</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>Hikma<br />Sports</h2>
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