export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Copyright! All rights reserved! </p>
    </footer>
  );
}
