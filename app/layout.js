import MainHeader from '@/components/header/main-header';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

/**
 * The root layout component, which wraps all pages and is the topmost
 * component in the component tree.
 *
 * This component is responsible for rendering the main header, as well as
 * the children passed to it (i.e. the page content).
 *
 * @param {{ children: React.ReactNode }} props
 *   The props object, which contains the children to be rendered.
 *
 * @returns {React.ReactElement}
 *   The JSX element representing the root layout.
*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
