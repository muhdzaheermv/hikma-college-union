import React from 'react'
import Head from 'next/head'
import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProshowPage.module.css'


const artists = [
    {
        name: 'Victory Day',
        date: '27/10/2025',
        day: 'Monday',
        img: '/images/eventOne.jpeg',
        id: "neetimohan",
        content: 'Aspire College Thrithala proudly presents the Hikma Union 2025–26 inauguration with a vibrant Victory Day celebration! Enjoy a powerful live band performance by St. Marys Kozhikode as their energetic rhythms light up the day, marking the start of an exciting new union journey filled with spirit, music, and celebration.'
    },
    // {
    //     name: 'JUBIN NAUTIYAL',
    //     date: '11/03/2023',
    //     day: 'Saturday',
    //     img: '/images/Jubin proshow.png',
    //     id: "jubin",
    //     content: 'It\'s time to put on your dancing shoes and get ready to groove to the beats of the sensational Jubin Nautiyal! Brace yourselves to be mesmerized by his soulful voice, as he takes the stage and sets the vibe for an unforgettable night of music and entertainment. So, mark your calendars and get ready to witness a night of musical bliss!'
    // },
    // {
    //     name: 'AMIT TRIVEDI',
    //     date: '12/03/2023',
    //     day: 'Sunday',
    //     img: '/images/Amit proshow.png',
    //     id: "amittrivedi",
    //     content: 'Get ready to witness an electrifying performance by the one and only, the renowned Bollywood singer and composer Amit Trivedi at Ragam\'23 - South India\'s  biggest cultural fest! Brace yourselves for an unforgettable evening as Amit Trivedi is all set to set the stage on fire with his scintillating voice and chart-topping hits. So mark your calendars and get ready to groove to his sensational tunes on the 12th of March, as we bring you the biggest musical extravaganza of the year!'
    // }
]


const eventsPage = () => {
 return (
        <>
            <Head>
                <title>Hikma Events</title>
                <meta name="description" content="Ragam 2023 | Proshow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>Hikma Union<br />Events</h2>
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

export default eventsPage


