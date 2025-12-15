import styles from "@/styles/Team.module.css"
import Image from "next/image"

export default function TeamCard({ label, name, designation, image, whatsapp }) {

  const formatNumber = (num) => `${num.slice(0, 5)} ${num.slice(5)}`

  return (
    <div className={styles.card}>
      <Image
        src={image}
        unoptimized
        width={280}
        height={300}
        className={styles.image}
        alt={name}
      />

      {label === 'Leads' ? <div className={styles.overlay}></div> : ''}

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.designation}>{designation}</p>

        {whatsapp && (
          <a
            href={`https://wa.me/91${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '12px',
              display: 'block',
              paddingLeft: '10px',
              fontSize: '0.95rem',
              fontWeight: '300',
              color: 'rgba(235, 230, 208, 1)',
              textDecoration: 'none',
              borderLeft: '2px solid rgba(235, 230, 208, 0.35)',
              letterSpacing: '0.03em',
              cursor: 'pointer'
            }}
          >
            +91 {formatNumber(whatsapp)}
          </a>
        )}
      </div>
    </div>
  )
}
