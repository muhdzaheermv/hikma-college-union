
import styles from '@/styles/Coming.module.css'
import React from 'react'
import Head from 'next/head'
import ProshowPageCard from '@/components/Proshow/proshowPageCard'


const artists = [
    {
        name: 'Jeevanadam Blood Donation Camp',
        date: '03/12/2025',
        day: 'Wednesday',
        img: '/images/nssFour.jpeg',
        id: "neetimohan",
        content: 'Aspire College, in association with NSS Unit 180, conducted the ‘Jeevanadam’ blood donation camp to encourage students and staff to contribute to life-saving causes. The event highlighted the importance of voluntary blood donation and community service.'
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



export default function Coming(){
    return(
         <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>National<br />Service Scheme</h2>
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
    )
}