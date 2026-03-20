import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ftLeft}>
        <span className={styles.ftMark}>HarborOS</span>
        <div className={styles.ftSep}></div>
        <span className={styles.ftPage}>The CFO Intelligence Layer · 2026</span>
      </div>
      <div className={styles.ftRight}>The CFO intelligence layer for PE-backed software companies.</div>
    </footer>
  )
}
