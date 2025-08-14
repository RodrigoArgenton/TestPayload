import { fetchPayloadContent } from "@/lib/payload";
import Image from "next/image";
import Link from "next/link";

export default async function LogoIcon() {
  const PAYLOAD_URL = process.env.PAYLOAD_SERVER_URL || 'http://localhost:3000';


  const logos = await fetchPayloadContent('media', { limit: 1 })

  const logo = logos[0]

  console.log(logo)

  return (
    <div>
      <Link
        href={'/'}
      >
        <Image
          src={PAYLOAD_URL + logo.url}
          alt={logo.alt}
          width={logo.width || 200}
          height={logo.height || 100}
          style={{
            maxWidth: '200px'
          }}
        />
      </Link>
    </div>
  )
}