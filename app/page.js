import Link from 'next/link';
import styles from './page.module.css';
import ImageSlideshow from '@/components/images/slideShow';

/**
 * A functional component that renders the homepage of the NextLevel Food application.
 * It includes a header with a slideshow of images, a welcome message, and links
 * for joining the community or sharing a meal. The main content provides information
 * about how the platform works and the benefits of using NextLevel Food.
 *
 * @return {React.ReactElement} The JSX element representing the homepage.
*/
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Welcome to NextLevel Food</h1>
            <p> Delicious meals, shared by a food-loving community.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Share a Meal</Link> 
          </div>
        </div>
      </header>
      <main>
      <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
