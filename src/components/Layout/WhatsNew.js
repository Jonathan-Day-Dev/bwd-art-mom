import styles from './WhatsNew.module.css';
import bannerLogo from '../../assets/logo_banner.jpg';
import artcenter from '../../assets/artcenter.jpg';

const WhatsNew = props => {
    return <section className={styles.main}>
        <img src={bannerLogo} alt="logo" className={styles['logo-img']}/>
        <h2>WHAT'S NEW AT THE BROWNWOOD ART ASSOCIATION</h2>
        <img src={artcenter} alt="art center" className={styles['art-center-img']} />
    </section>
}

export default WhatsNew;