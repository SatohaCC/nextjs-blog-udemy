import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
const name = "Satoha Code";
export const siteTitle = "Next.js blog";
import Link from "next/link";
import Image from "next/image";

function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<heade className={styles.header}>
				{home ? (
					<>
						<Image
							src="/images/profile.png"
							className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
							alt=""
						/>
						<h1 className={utilStyles.headingXl}>{name}</h1>
					</>
				) : (
					<>
						<Image
							src="/images/profile.png"
							className={`${utilStyles.borderCircle} `}
							alt=""
						/>
						<h1 className={utilStyles.headingXl}>{name}</h1>
					</>
				)}
			</heade>
			<main>{children}</main>
			{!home && (
				<div>
					<Link href="/">ホームへ戻る</Link>
				</div>
			)}
		</div>
	);
}

export default Layout;
