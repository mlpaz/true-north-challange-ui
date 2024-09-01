import { Card } from "@nextui-org/card";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="grid grid-cols-2 gap-12">
        <Link href={"/home/operation/math"}>
          <Card className={styles.card}>
            <h1>Calculator</h1>
            <p>Use Calculator with operations :</p>
            <ul>
              <li>Addition</li>
              <li>Subtraction</li>
              <li>Multiplication</li>
              <li>Division</li>
              <li>Square Root</li>
            </ul>
          </Card>
        </Link>
        <Link href={"/home/operation/string-generator"}>
          <Card className={styles.card}>
            <h1> String Generator</h1>
            <p>Create a Strings with params :</p>
            <ul>
              <li>Number of rows</li>
              <li>Lenght</li>
              <li>Digits</li>
              <li>Lowercase Letters</li>
              <li>Uppercase Letters</li>
            </ul>
          </Card>
        </Link>
        <Link href={"/home/records"}>
          <Card className={styles.card}>
            <h1> Record Table</h1>
            <p>Search the Historic Record :</p>
            <ul>
              <li>Search By Operation</li>
              <li>Search By Date</li>
              <li>Order by Date</li>
              <li>Delete </li>
              <li>Show Details</li>
            </ul>
          </Card>
        </Link>
      </div>
    </section>
  );
}
