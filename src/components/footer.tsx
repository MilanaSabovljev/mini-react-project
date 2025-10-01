import { useState } from "react";

export default function Footer() {
  //const currentYear = new Date().getFullYear :string;
  const [date, setDate] = useState(2025);

  return (
    <footer>
      <p>&copy; {date} Copyright! All rights reserved! </p>
    </footer>
  );
}
